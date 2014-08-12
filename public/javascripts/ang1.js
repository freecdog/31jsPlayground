/**
 * Created by yarvyk on 12.08.2014.
 */

(function (){

    "use strict";

    console.log("ang1", angular);

    var jApp = angular.module('jApp', []);
    console.log(jApp);

    jApp.controller('jListCtrl', function($scope) {
        $scope.jElements = [
            {
                'name': '1) Qwe',
                'snippet': 'qsc qsc'
            },
            {
                'name': '2) Asd',
                'snippet': 'axe axe'
            },
            {
                'name': '3) Zxc',
                'snippet': 'zwd zwd'
            }
        ];
    });
})();