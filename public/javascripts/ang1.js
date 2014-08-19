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

        // till http request doesn't processed there will be temp data
        $scope.jElements = [
            {
                'name': 'Qwe',
                'snippet': 'qsc qscr',
                // not random, for protractor tests
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
        ];

        $http.get('/ang1/data').success(function(data){
            console.log("data fetched", data);
            $scope.jElements = data;
        });

        $scope.nameSnippetFilter = function(elem){
            console.warn(elem);
            if ($scope.jQuery == undefined) return true;
            var query = $scope.jQuery.trim();
            return elem.name.indexOf(query)!=-1 || elem.snippet.indexOf(query)!=-1;
        };

        // to descent order use '-name'
        $scope.jOrderProp = 'name';
    }]);
})(angular);