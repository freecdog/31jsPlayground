/**
 * Created by yarvyk on 12.08.2014.
 */

(function (angular){

    "use strict";

    console.log("ang1", angular);

    var jApp = angular.module('jApp', []);
    console.log(jApp);

    jApp.controller('jListCtrl', function($scope) {
        $scope.jElements = [
            {
                'name': '1) Qwe',
                'snippet': 'qsc qscr'
            },
            {
                'name': '2) Asd',
                'snippet': 'axe axef'
            },
            {
                'name': '3) Zxc',
                'snippet': 'zwd zwdv'
            }
        ];
    });
})(angular);