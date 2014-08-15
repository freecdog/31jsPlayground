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
        ];

        $scope.jOrderProp = 'name';
    });
})(angular);