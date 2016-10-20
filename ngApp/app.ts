namespace forum {

    angular.module('forum', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: forum.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('forum', {
              url: '/forum',
              templateUrl: '/ngApp/views/forum.html',
              controller: forum.Controllers.ListForumController,
              controllerAs: 'controller'
            })
            .state('todoList', {
              url: '/todoList',
              templateUrl: '/ngApp/views/todoList.html',
              controller: forum.Controllers.ListToDoController,
              controllerAs: 'controller'
            })
            .state('todoListEdit', {
              url: '/todoListEdit/:id',
              templateUrl: '/ngApp/views/todoListEdit.html',
              controller: forum.Controllers.EditToDoListController,
              controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: forum.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
