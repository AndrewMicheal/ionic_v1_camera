angular.module("starter").factory('LocalStorageService', function() {



  function LocalStorageService(imageData) {
    let arrImage;
    if(localStorage.getItem("images") == null) {
      arrImage = [];
    } else {
      arrImage = JSON.parse(localStorage.getItem("images"));
    }
    arrImage.push(imageData);
    setLocalStorage(arrImage);
  }

  function getArrImage() {
    return JSON.parse(localStorage.getItem("images"))
  }

  function setLocalStorage(arr) {
    localStorage.setItem("images" , JSON.stringify(arr));
  }

  return {
    LocalStorageService ,
    getArrImage
  }
});
