angular.module("starter").factory('myCamera', function($cordovaCamera) {

      function cameraCordova() {
          let options = {
            quality: 100,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType : Camera.PictureSourceType.CAMERA,
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
          }
           return $cordovaCamera.getPicture(options);
         }

      return {
        cameraCordova
      }
});
