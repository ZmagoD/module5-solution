(function () {
  'use strict';

  angular
    .module('public')
    .controller('MyDetailsController', MyDetailsController);

  MyDetailsController.$inject = ['MenuService'];

  function MyDetailsController(MenuService) {
    var $ctrl = this;
    $ctrl.user = MenuService.getUser();
    $ctrl.user_present = function() {
      if ( $ctrl.user.fname == undefined ) {
        return false;
      } else {
        return true;
      }
    }
  }

})();
