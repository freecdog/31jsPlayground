/**
 * Created by yarvyk on 22.08.2014.
 */

var jApp = angular.module('jApp', []);

jApp.controller('jController', function jController($scope){
    $scope.obj = {text: "hi"};
});