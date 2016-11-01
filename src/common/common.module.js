(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://secret-peak-84014.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
