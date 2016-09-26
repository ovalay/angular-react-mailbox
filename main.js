angular.module("MailboxApp", ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/inbox");
        $stateProvider.state("inbox", {
            url:"/inbox",
            templateUrl:"partials/inbox.html",
            controller: function ($scope, messageStore) {
                //console.log('inbox')
                $scope.messages = messageStore.getMessages();
            }
        })
            .state("message", {
                url:"/message/:id",
                templateUrl:"partials/message.html",
                controller: function($scope, messageStore, $stateParams) {
                    $scope.message = messageStore.getMessages()
                        .filter(function (message) {
                            return message.id == $stateParams.id;
                        })[0];
                }
            })
    })
    .service("messageStore", function () {
        var messages = [];
        var sampleSize = 100;
        for (var i=0; i<sampleSize; i++) {
            messages.push({
                sender: "joe.bloggs"+i+"@gmail.com",
                date: Date.now()- i*24000000,
                id: i,
                subject: "re: test message "+i,
                body: "Test message "+i
            })
        }
        
        return {
            getMessages: function () {
                return messages;
            }
        }
    })