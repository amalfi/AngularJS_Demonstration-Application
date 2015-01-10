var phonecatApp = angular.module('musicAlbumsApp', []);

phonecatApp.controller('MusicAlbumsCtrl', function ($scope, $http) {
  $http.get("./js/musicAlbums.json").success(function(data) 
 {
    $scope.phones = data;
  });

});