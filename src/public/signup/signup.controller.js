(function () {
  'use strict';

  angular
    .module('public')
    .controller('SignUpController', SignUpController);


  SignUpController.$inject = ['MenuService', '$q'];
  function SignUpController(MenuService, $q) {
    var $ctrl = this;
    $ctrl.menuService = MenuService;
    $ctrl.dishValid = true;
    $ctrl.user = {
    	fname: '',
    	lname: '',
    	email: '',
    	phone: '',
      favoriteDish: ''
    };
    $ctrl.checkCatMessage;

    $ctrl.save = function() {
      $ctrl.menuService.user = JSON.parse(JSON.stringify($ctrl.user));
      $ctrl.invalidDish()
           .then(function() {
             if ( $ctrl.dishValid ) {
               $ctrl.success = 'Your information has been saved!';
             } else {
               $ctrl.menuService.user = {};
             }
           });
    }

    $ctrl.invalidDish = function() {
      return $ctrl
              .menuService
              .checkCategory($ctrl.user.favoriteDish)
              .then(function() {
                $ctrl.dishValid = true;
                return $q.when($ctrl.user.favoriteDish);
              }, function() {
                $ctrl.dishValid = false;
                $q.reject();
              })
    }
  }

})();
