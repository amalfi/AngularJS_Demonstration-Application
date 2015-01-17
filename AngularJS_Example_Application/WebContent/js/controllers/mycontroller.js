var musicAlbumsApp = angular.module('musicAlbumsApp', []);

musicAlbumsApp.controller('MusicAlbumsListController', function ($http, $scope, AlbumsService) 
{

  $scope.submit = function() 
  {
      if ($scope.text) 
      {
    	  var allAlbums = new Array();  
 		  allAlbums =  AlbumsService.allAlbums($http, $scope.text);
    	  $scope.albums = allAlbums;
      }
  }
  
  
});