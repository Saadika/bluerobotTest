(function() {
  'use strict';

  angular
    .module('bluerobot')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {

    $scope.stage = "stage1";
    $scope.formValidation = false;
    $scope.submitted = false;

    $scope.isActive = true;
    $scope.isActive1 = false;

     $scope.image1 = 'assets/images/bag_white.png';
     $scope.image2 = 'assets/images/pin_grey.png';
     $scope.image3 = 'assets/images/credit_card_grey.png';
     $scope.image4 = 'assets/images/checkmark_grey.png';

    // Navigation functions
    $scope.next = function (stage, isActive1) {
      if(!$scope.multiStepForm.$valid)
      $scope.submitted = true;

      $scope.formValidation = true;

      if ($scope.multiStepForm.$valid) {
        $scope.direction = 1;
        $scope.stage = stage;

        if(stage === "stage2") {
          $scope.isActive1 = true;
        }

        if(stage === "stage3") {
          $scope.isActive2 = true;

          if ($scope.image2 === 'assets/images/pin_grey.png') {
            $scope.image2 = 'assets/images/checkmark_white.png';
          }
        }

        if(stage === "stage4") {
          $scope.isActive3 = true;

          if ($scope.image3 === 'assets/images/credit_card_grey.png') {
            $scope.image3 = 'assets/images/checkmark_white.png';
          }
        }

        if(stage === "stage5") {
          $scope.isActive3 = true;

          if ($scope.image4 === 'assets/images/checkmark_grey.png') {
            $scope.image4 = 'assets/images/checkmark_white.png';
          }
        }
        $scope.formValidation = false;
      }

      if ($scope.image1 === 'assets/images/bag_white.png') {
        $scope.image1 = 'assets/images/checkmark_white.png';
      }







    };


    $scope.back = function (stage) {
      $scope.direction = 0;
      $scope.stage = stage;

      if(stage === "stage1") {
        $scope.isActive1 = false;

        if ($scope.image2 === 'assets/images/checkmark_white.png') {
          $scope.image2 = 'assets/images/checkmark_white.png';
        }
      }

      if(stage === "stage2") {
        $scope.isActive2 = false;

        if ($scope.image3 === 'assets/images/checkmark_white.png') {
          $scope.image3 = 'assets/images/checkmark_white.png';
        }
      }

      if(stage === "stage3") {
        $scope.isActive3 = false;

        if ($scope.image4 === 'assets/images/checkmark_white.png') {
          $scope.image4 = 'assets/images/checkmark_white.png';
        }
      }

      if(stage === "stage5") {
        $scope.isActive3 = true;

        if ($scope.image4 === 'assets/images/checkmark_grey.png') {
          $scope.image4 = 'assets/images/checkmark_white.png';
        }
      }

      if ($scope.image1 === 'assets/images/checkmark_white.png') {
        $scope.image1 = 'assets/images/bag_white.png';
      }






    }

  $scope.submitForm = function() {
    $scope.formParams = {};
    $scope.stage = "success";
  }



  }
})();
