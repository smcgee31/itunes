angular.module('itunes').service('itunesService', function($http, $q){

    this.getArtistData = function(artist) {
        return $http({
            method: 'JSONP',
            url: 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
        }).then(function(response) {
            console.log(response.data.results);
            return response.data.results;
        });
    };


});
