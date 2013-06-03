'use strict';

angular.module('tootrApp')
  .controller('MainCtrl', function ($scope) {
    $scope.toots = [
      {img: "img/profile.jpg", handle: "limecat", name: "Lime Cat", message: "Citrus Hairball", time: "7m"},
      {img: "img/kurtcobain.jpg", handle: "nirvana", name: "Kurt Cobain", message: "Teen Spirit", time: "6h"},
      {img: "img/holtbt.jpg", handle: "holtbt", name: "Brian Holt", message: "B. O.", time: "2 Nov 11"},
    ]
  });
