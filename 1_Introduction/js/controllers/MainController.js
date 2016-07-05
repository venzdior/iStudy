app.controller('MainController', ['$scope', function ($scope) {
    $scope.title = 'Book Collection';
    $scope.promo = 'Venz';

    $scope.products = [
        {
            name: 'The Book of Trees',
            price: 19,
            pubdate: new Date('2014', '03', '08'),
            cover: 'img/El Capitan 2.jpg',
            likes: 0,
            dislikes: 0
  },
        {
            name: 'Program or be Programmed',
            price: 8,
            pubdate: new Date('2013', '08', '01'),
            cover: 'img/Earth Horizon.jpg',
            likes: 0,
            dislikes: 0
  },
        {
            name: 'The iStudy Book',
            price: 190,
            pubdate: new Date('2016', '06', '30'),
            cover: 'img/Earth and Moon.jpg',
            likes: 0,
            dislikes: 0
  },
        {
            name: 'Programmer Book',
            price: 80,
            pubdate: new Date('2016', '07', '02'),
            cover: 'img/Eagle & Waterfall.jpg',
            likes: 0,
            dislikes: 0
  }
]

    $scope.plusOne = function (index) {
        $scope.products[index].likes += 1;
    };

    $scope.minusOne = function (index) {
        $scope.products[index].dislikes += 1;
    }

}]);