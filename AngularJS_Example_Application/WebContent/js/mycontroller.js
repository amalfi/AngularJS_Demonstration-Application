var musicAlbumsApp = angular.module('musicAlbumsApp', []);

musicAlbumsApp.controller('MusicAlbumsCtrl', function ($scope, $http) {
  $http.get("./js/musicAlbums.json").success(function(data) 
 {
    $scope.albums = data;
  });
  $scope.orderProp = 'artist';

});