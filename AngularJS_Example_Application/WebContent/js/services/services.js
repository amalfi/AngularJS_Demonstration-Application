musicAlbumsApp.factory("AlbumsService", function($http) {
	
  return {
    allAlbums: function($http, artistName) 
    {
		var albums = new Array();
		var lastFMApiRequestLink = "http://ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist="+artistName+"&api_key=83d674fdb0f2798509110d0ed6261672&format=JSON";
    	$http.get(lastFMApiRequestLink).success(function(data) 
    			 {
	    				var albumsObjects = data.topalbums.album;
	    				for(var i=0; i<albumsObjects.length; i++)
	    				{
	    					albums[i]=albumsObjects[i].name
	    				}
    			    //data.topalbums.album[1].name ('Master of Puppets');
    			  })

      return albums;
    }
  };
});



