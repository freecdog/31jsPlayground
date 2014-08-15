/**
 * Created by yarvyk on 12.08.2014.
 */

(function (angular){

    "use strict";

    console.log("ang1", angular);

    var jApp = angular.module('jApp', []);
    console.log("jApp", jApp);

    //jApp.controller('jListCtrl', function($scope, $http) {
    // in angular tutorial 5 described why it's  better to use such method.
    // The main reason why to do this is code minify technique which one is changing variable names.
    jApp.controller('jListCtrl', ['$scope', '$http', function($scope, $http) {

        /*$scope.jElements = [
            {
                'name': 'Qwe',
                'snippet': 'qsc qscr',
                'date': (new Date()).getMilliseconds() + 10000
            },
            {
                'name': 'Asd',
                'snippet': 'axe axef',
                'date': (new Date()).getMilliseconds() + 5000
            },
            {
                'name': 'Zxc',
                'snippet': 'zwd zwdv',
                'date': (new Date()).getMilliseconds() + 2500
            }
        ];*/

        $http.get('/ang1/data').success(function(data){
            console.log("data fetched", data);
            console.warn("Query ng-model fails with base64 image, don't know why it used to find them, but it is");
            $scope.jElements = data;
        });

        // to descent order use '-name'
        $scope.jOrderProp = 'name';
    }]);
})(angular);