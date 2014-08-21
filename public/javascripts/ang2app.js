/**
 * Created by yarvyk on 21.08.2014.
 */

(function (angular){

    "use strict";

    console.log("ang2", angular);

    var jApp = angular.module('jApp', [
        'ngRoute',
        'jContollers'
    ]);
    console.log("jApp", jApp);

    jApp.config(['$routeProvider',function($routeProvider) {
        $routeProvider.
            when('/elements', {
                templateUrl: 'partials/ang2list.html',
                controller: 'jListCtrl'
            }).
            when('/elements/:elemId', {
                templateUrl: 'partials/ang2elem.html',
                controller: 'jElemCtrl'
            }).
            otherwise({
                redirectTo: '/elements'
            });
    }]);

})(angular);