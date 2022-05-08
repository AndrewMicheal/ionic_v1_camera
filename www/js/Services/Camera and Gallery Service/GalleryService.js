angular.module("starter").factory('GalleryService', function($cordovaCamera) {

  function galleryCordova() {
      let options = {
        quality: 100,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
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
    galleryCordova
  }
});
