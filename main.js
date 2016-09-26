angular.module("MailboxApp", ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/inbox");
        $stateProvider.state("inbox", {
            url:"/inbox",
            templateUrl:"partials/inbox.html",
            controller: function ($scope) {
                //console.log('inbox')
                $scope.messages = [];
            }
        })

    })