(function () {
  'use strict';

  angular
    .module('public')
    .controller('SignUpController', SignUpController);


  SignUpController.$inject = ['MenuService'];
  function SignUpController(MenuService) {
    var $ctrl = this;
    $ctrl.menuService = MenuService;
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
      $ctrl.success = 'Your information has been saved!'
    }

    $ctrl.invalidDish = function(dish) {
      debugger;
      return $ctrl.menuService.checkCategory(dish)
    }
  }

})();
