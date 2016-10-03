angular.module('itunes').controller('mainCtrl', function($scope, itunesService){
  //This is setting up the default behavior of our ng-grid. The important thing to note is the 'data' property. The value is 'songData'. That means ng-grid is looking for songData on $scope and is putting whatever songData is into the grid.
  // This means when you make your iTunes request, you'll need to get back the information, parse it accordingly, then set it to songData on the scope -> $scope.songData = ...
    $scope.gridOptions = {
        data: 'songData',
        height: '110px',
        sortInfo: {fields: ['Song', 'Artist', 'Collection', 'Type'], directions: ['asc']},
        columnDefs: [
            {field: 'previewUrl', displayName: 'Play', width: '40px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}"><img src="http://www.icty.org/x/image/Miscellaneous/play_icon30x30.png"></a></div>'},
            {field: 'trackName', displayName: 'Song'},
            {field: 'artistName', displayName: 'Artist'},
            {field: 'collectionCensoredName', displayName: 'Album'},
            {field: 'trackNumber', displayName: 'Track'},
            {field: 'artworkUrl60', displayName: 'Album Art', width: '110px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
            {field: 'primaryGenreName', displayName: 'Genre'},
            {field: 'trackPrice', displayName: 'Song Price'},
            {field: 'collectionPrice', displayName: 'Album Price'},
        ]
    };

    $scope.getSongData = function(artist) {
        itunesService.getArtistData($scope.artist).then(function (response){
            $scope.songData = response;
        });
    };

    $scope.songData = itunesService.getArtistData;

});
