// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})



let cameraModule = angular.module("starter" , ['ionic','ngCordova']);

cameraModule.controller('ctr' , function($scope , myCamera , LocalStorageService , $ionicActionSheet , GalleryService) {
  function start () {
    myCamera.cameraCordova().then(onSuccess , onFail);

    function onSuccess(imageData) {
      let image = "data:image/jpeg;base64," + imageData;
      LocalStorageService.LocalStorageService(image);
      $scope.pictures = LocalStorageService.getArrImage();
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
  }

  function gallery() {
    GalleryService.galleryCordova().then(onSuccess , onFail);

    function onSuccess(imageData) {
      let image = "data:image/jpeg;base64," + imageData;
      LocalStorageService.LocalStorageService(image);
      $scope.pictures = LocalStorageService.getArrImage();
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
  }

  $scope.pictures = LocalStorageService.getArrImage();

  $scope.show = function() {

    // Show the action sheet
     $ionicActionSheet.show({
      buttons: [
        { text: 'Camera' },
        { text: 'Gallery' }
      ],
      titleText: 'Modify your album',
      cancelText: 'Cancel',
      buttonClicked: function(index) {
        switch(index) {
          case 0:
            start()
            break;

          case 1 :
            gallery()
            break;
        }
      }
    });
  }
})
