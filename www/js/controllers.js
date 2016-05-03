angular.module('app.controllers', ['ngCordova'])

.controller('menuCtrl', function($scope, $state) {
  $scope.inState = function(state){
      return $state.is(state);
  }
})

.controller('projectsCtrl', function($scope) {
  $scope.active_projs = [
    {
      title: "H1-B",
      progress: 65,
      type: "Not Visa",
      initiation_date: "9 APR 2016"
    },
    {
      title: "Angola Business Visa",
      progress: 20,
      type: "Visa",
      initiation_date: "31 JAN 2016"
    },
    {
      title: "China Business Visa",
      progress: 80,
      type: "Visa",
      initiation_date: "12 NOV 2015"
    }];
  $scope.inactive_projs = [{
      title: "OPT Stem",
      progress: 100,
      type: "Not Visa",
      initiation_date: "13 MAR 2015"
    },
    {
      title: "Australia Business Visa",
      progress: 100,
      type: "Visa",
      initiation_date: "4 JAN 2015"
    }];


})

.controller('projectDetailsCtrl', function($scope) {

})

.controller('documentsCtrl', function($scope, $state, $cordovaCamera, $cordovaDialogs, $rootScope) {
  $scope.toupload_documents = [
    {
      title: "Diploma(s)",
      description: "Copies of all degrees, diplomas, and transcripts, if applicable",
      status: "To Upload"
    },{
      title: "Passport(s)",
      description: "Copy of passport biographic and signature pages",
      status: "To Upload"
    },{
      title: "Resume",
      description: "Copy of up-to-date resume (CV) that includes dates with each employer, each position held, and duties",
      status: "To Upload"
    }];
  $scope.uploaded_documents = [
    {
      title: "US Visa(s)",
      description: "Copies of current U.S. visa and of all previous U.S. visas, if applicable",
      status: "Uploaded"
    },{
      title: "Immigration Paperwork",
      description: "Copies of all previous U.S. immigration paperwork including prior approval notices (Form I-797), Form IAP-66, Form DS-2019, and/or Form(s) I-20, and/or Employment Authorization Card, if applicable",
      status: "Uploaded"
    }];
})

.controller('documentCategoriesCtrl', function($scope) {

})

.controller('statusCtrl', function($scope) {
  $scope.project_status = [
    {
      title: "Project Initiated",
      update: ["9 APR 2016 - Case initiated. Awaiting return of completed questionnaires.",
      "15 NOV 2015 - Questionnaires and supporting documents received. Awaiting Employment Details from HR."],
      progress: 100,
      status: "Completed"
    },
    {
      title: "Preparing Application",
      update: ["19 NOV 2015 - Preparing H-1B Petition.",
      "20 NOV 2015 - Sent documents to company for signatures."],
      progress: 50,
      status: "In Progress"
    },
    {
      title: "Submit Application to USCIS",
      update: "",
      progress: 0,
      status: "Not Started"
    },
    {
      title: "Application Approved",
      update: "",
      progress: 0,
      status: "Not Started"
    }
  ];

})



.controller('documentDetailsCtrl', function($scope, $state, $cordovaCamera, $ionicModal, $stateParams, $rootScope, $cordovaDialogs) {
  $rootScope.arrPhotos = $stateParams.photos;
  // $rootScope.arrPhotos = [];

  $scope.document = {};
  // $rootScope.arrPhotos = ['data:image/png;base64,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'];
  // $scope.document.attachment = [{
  //   'FilePath': 'data:image/png;base64,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'
  // }];
  var _updateDisplayPhoto = function() {
      var _countPhoto = $rootScope.arrPhotos.length;
      $scope.document.attachment = [];
      if (_countPhoto > 4) {
          for (var i = _countPhoto - 4; i < _countPhoto; i++) {
              $scope.document.attachment.push({
                  'FilePath': $rootScope.arrPhotos[i].indexOf("base64") > 0 ? $rootScope.arrPhotos[i] : "data:image/jpeg;base64,"+$rootScope.arrPhotos[i]
              });
          }
      } else {
          for (var j = 0; j < $rootScope.arrPhotos.length; j++) {
              $scope.document.attachment.push({
                  'FilePath': $rootScope.arrPhotos[j].indexOf("base64") > 0 ? $rootScope.arrPhotos[j] : "data:image/jpeg;base64,"+$rootScope.arrPhotos[j]
              });
          }
      }
  };

  _updateDisplayPhoto();

  $scope.viewPhoto = function(index) {
      $scope.attachmentFrom = 'Document';
      if ($rootScope.arrPhotos.length === 0) {
          $scope.document.attachment.forEach(function(img) {
              $rootScope.arrPhotos.push(img.FilePath);
          });
      }
      $rootScope.$broadcast('attachmentModalInit', $rootScope.arrPhotos);
      $scope.attachmentModal.show();
  };

  $ionicModal.fromTemplateUrl('templates/attachment-photos.html', {
      scope: $scope,
      animation: 'slide-in-up'
  }).then(function(attachmentModal) {
      $scope.attachmentModal = attachmentModal;
  });

  $scope.closeAttachmentPhotosModal = function() {
      $scope.attachmentModal.hide();
  };

  $scope.deletePhoto = function(index) {
      $rootScope.arrPhotos.splice(index, 1);
      _updateDisplayPhoto();
      if ($rootScope.arrPhotos.length > 0) {
          $scope.$broadcast('attachmentModalInit', $rootScope.arrPhotos, index);
      } else {
          $scope.attachmentModal.hide();
      }
  };
  //
  // $scope.getCameraRoll = function() {
  //     //Commented temporary for google integration test
  //     // var client_id = "303684445331-3tblts89ihiuljohmldducuv9tfggtpu.apps.googleusercontent.com";//web-app
  //     // var scopes = ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/drive.file', 'https://www.googleapis.com/auth/userinfo.email'];
  //     // Drive.authenticate(client_id, scopes, {redirect_uri: 'http://localhost/callback'})
  //     // .then(function (response) {//authenticate
  //     //     if (response) {
  //     //         var token = response.access_token;
  //     //         gapi.auth.setToken(response);
  //     //         $state.go('drive');
  //     //     }
  //     //   },
  //     //   function (error) {
  //     //     console.log("" + error);
  //     //   });
  //     $state.go('menu.localFile');
  // };




  // ------ The following is for uploading photos
  // $rootScope.arrPhotos = [];
  // $scope.document = {};
  // var _updateDisplayPhoto = function() {
  //   var _countPhoto = $rootScope.arrPhotos.length;
  //   $scope.document.attachment = [];
  //   if (_countPhoto > 4) {
  //       for (var i = _countPhoto - 4; i < _countPhoto; i++) {
  //           $scope.document.attachment.push({
  //               'FilePath': $rootScope.arrPhotos[i].indexOf("base64") > 0 ? $rootScope.arrPhotos[i] : "data:image/jpeg;base64,"+$rootScope.arrPhotos[i]
  //           });
  //       }
  //   } else {
  //       for (var j = 0; j < $rootScope.arrPhotos.length; j++) {
  //           $scope.document.attachment.push({
  //               'FilePath': $rootScope.arrPhotos[j].indexOf("base64") > 0 ? $rootScope.arrPhotos[j] : "data:image/jpeg;base64,"+$rootScope.arrPhotos[j]
  //           });
  //       }
  //   }
  // };
  $scope.getPhoto = function() {
    $cordovaDialogs.confirm('Please take photo or pick photo from Camera Roll', '', ['Camera','Camera Roll'])
        .then(function(buttonIndex) {
        var btnIndex = buttonIndex;
        if(buttonIndex == 1){
          var options = {
              quality: 100,
              destinationType: Camera.DestinationType.DATA_URL,
              sourceType: Camera.PictureSourceType.CAMERA,
              allowEdit: false,
              encodingType: Camera.EncodingType.JPEG,
              targetWidth: 525,
              targetHeight: 745,
              popoverOptions: CameraPopoverOptions,
              saveToPhotoAlbum: false
          };

          $cordovaCamera.getPicture(options).then(function(imageData) {
            alert("OCR Complete");
              if ($rootScope.arrPhotos.length === 0 && $scope.document.attachment && $scope.document.attachment.length > 0) {
                  $scope.document.attachment.forEach(function(img) {
                      $rootScope.arrPhotos.push(img.FilePath);
                  });
              }
              $rootScope.arrPhotos.push("data:image/jpeg;base64," + imageData);
              // _updateDisplayPhoto();

              $state.go($state.current, {"photos":$rootScope.arrPhotos}, {reload: true});
              // $state.go('menu.documentDetails',{"photos":$rootScope.arrPhotos});
          }, function(err) {
              console.log(err);
          });
        }
        else{
          var options = {
              quality: 100,
              destinationType: Camera.DestinationType.DATA_URL,
              sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
              allowEdit: false,
              encodingType: Camera.EncodingType.JPEG,
              targetWidth: 525,
              targetHeight: 745,
              popoverOptions: CameraPopoverOptions,
              saveToPhotoAlbum: false
          };

          $cordovaCamera.getPicture(options).then(function(imageData) {
            alert("OCR Complete");
              if ($rootScope.arrPhotos.length === 0 && $scope.document.attachment && $scope.document.attachment.length > 0) {
                  $scope.document.attachment.forEach(function(img) {
                      $rootScope.arrPhotos.push(img.FilePath);
                  });
              }
              $rootScope.arrPhotos.push("data:image/jpeg;base64," + imageData);
              // _updateDisplayPhoto();
              // $state.go($state.current, {"photos":$rootScope.arrPhotos}, {reload: true});
              // $state.go('menu.documentDetails',{"photos":$rootScope.arrPhotos});
          }, function(err) {
              console.log(err);
          });
        }
    });
  }


})

.controller('logInCtrl', function($scope, $state) {
  $scope.login = function() {
    if (($scope.login.username == "Baluser") && ($scope.login.password == "pass123")) {
      $state.go('menu.notification');
    }
    else if (($scope.login.username == "Employee") && ($scope.login.password == "pass123")) {
      $state.go('menu.projectDetails');
    }
    else {
      alert("Invalid Username/Password");
    }
  };
})

.controller('NotificationCtrl', function($scope, $state, $cordovaDialogs) {
  $scope.caseInitiated = function() {
    var now = new Date().getTime(),
    _5_sec_from_now = new Date(now + 5 * 1000);
    cordova.plugins.notification.local.schedule({
        id: 1,
        badge:1,
        text: "Case initiated, document(s) are required from user.",
        at: _5_sec_from_now
    });
  };
    // cordova.plugins.notification.local.on("trigger", function (notification) {
    //     var message = "";
    //     if (notification.id == 1){
    //         message = "Case initiated, document(s) are required from user.";
    //     }
    //     else if (notification.id == 2){
    //         message = "Document(s) received by BAL case manager.";
    //     }
    //     else if (notification.id == 3){
    //         message = "Changed in application status.";
    //     }
    //     else return;
        // $cordovaDialogs.alert('', message, 'OK')
        //   .then(function() {
        //     // callback success
        // });
    // });
    // };
})

.controller('balprojectsCtrl', function($scope) {
  $scope.active_projs = [
    {
      title: "H1-B",
      progress: 60,
      type: "Not Visa",
      initiation_date: "9 APR 2016"
    },
    {
      title: "Angola Business Visa",
      progress: 20,
      type: "Visa",
      initiation_date: "31 JAN 2016"
    },
    {
      title: "China Business Visa",
      progress: 80,
      type: "Visa",
      initiation_date: "12 NOV 2015"
    },
    {
      title: "Saudi Arabia Business Visa",
      progress: 75,
      type: "Visa",
      initiation_date: "4 JUL 2015"
    }];
})

.controller('balprojectdetailsCtrl', function($scope) {
  $scope.documentReceived = function() {
    var now = new Date().getTime(),
    _3_sec_from_now = new Date(now + 3 * 1000);
    cordova.plugins.notification.local.schedule({
        id: 2,
        badge:1,
        text: "Document(s) received by BAL case manager.",
        at: _3_sec_from_now
    });
  };
  $scope.statusChanged = function() {
    var now = new Date().getTime(),
    _1_sec_from_now = new Date(now + 1 * 1000);
    cordova.plugins.notification.local.schedule({
        id: 3,
        badge:1,
        text: "Changed in application status.",
        at: _1_sec_from_now
    });
    // cordova.plugins.notification.local.on("trigger", function (notification) {
    //     var message = "";
    //     if (notification.id == 1){
    //         message = "Case initiated, document(s) are required from user.";
    //     }
    //     else if (notification.id == 2){
    //         message = "Document(s) received by BAL case manager.";
    //     }
    //     else if (notification.id == 3){
    //         message = "Changed in application status.";
    //     }
    //     else return;
    //     $cordovaDialogs.alert('', message, 'OK')
    //       .then(function() {
    //         // callback success
    //     });
    // });
  };
})

.controller('LocalFileCtrl', function ($scope) {
  $scope.files = [];

  $scope.readFiles = function () {
    window.resolveLocalFileSystemURL(cordova.file.documentsDirectory + "Inbox/", function (fileSystem) {
      var reader = fileSystem.createReader();
      reader.readEntries(
        function (files) {
          console.log(files);
          $scope.files = files;
        },
        function (err) {
          console.log(err);
        });
    }, function (err) {
      console.log(err);
    });
  };
  $scope.readFiles();

})

.controller('attachmentPhotosCtrl', function($scope, $state, $log, $ionicNavBarDelegate, $ionicModal, $ionicSlideBoxDelegate) {
    $scope.attachmentSlidePoints = {};
    $scope.slideIndex = 0;

    $scope.$on("attachmentModalInit", function(event, photoList, viewIndex) {
        viewIndex = viewIndex ? viewIndex : 0;
        $scope.photoList = photoList;
        $scope.numSlides = photoList.length;
        if (viewIndex > photoList.length - 1) {
            viewIndex = photoList.length - 1;
        }
        $ionicSlideBoxDelegate.$getByHandle('attachmentSlide').slide(viewIndex);
        $scope.attachmentSlidePoints.setCurrentSlide(viewIndex);
        $scope.slideIndex = viewIndex;
    });

    $scope.slideHasChanged = function(index) {
        $scope.slideIndex = index;
        $scope.attachmentSlidePoints.setCurrentSlide(index);

    };
})

.controller('DriveCtrl', function ($scope, Drive) {
  $scope.files = [];

  $scope.readFiles = function () {
    Drive.readFiles().then(function (files) {
      $scope.files = files;
      console.log("FileRead: success.");
    }, function () {
      console.log("FileRead: error.");
    });
  };
  $scope.readFiles();

});
