app.controller('MainController', ['$scope', function ($scope) {
    $scope.apps = [
        {
            title: 'MOVE',
            developer: 'MOVE, Inc.',
            price: 0.99
	  },
        {
            title: 'starwars',
            developer: 'Chico Duskty',
            price: 2.99
	  },
        {
            title: 'Gameboard',
            developer: 'Armando P.',
            price: 1.99
	  },
        {
            title: 'Forecast',
            developer: 'Forecast',
            price: 1.99
	  }
	];
}]);