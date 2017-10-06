import angular from 'angular';
import header from './components/header/component';
import modules from './modules/config/module';
import core from './core/module';
import scss from './assets/main.scss';

var app = angular.module('app', [
  core.name,
  header.name,
  modules.name
]);

app.controller('appController', ['$scope', '$state', function ($scope, $state) {
  $state.go("fleets");
}]);

app.config(function(toastrConfig) {
  angular.extend(toastrConfig, {
    allowHtml: false,
    closeButton: true,
    positionClass: 'toast-bottom-right',
    closeHtml: '<button>&times;</button>',
    extendedTimeOut: 2000,
    iconClasses: {
      error: 'toast-error',
      info: 'toast-info',
      success: 'toast-success',
      warning: 'toast-warning'
    },  
    messageClass: 'toast-message',
    onHidden: null,
    onShown: null,
    onTap: null,
    progressBar: false,
    tapToDismiss: true,
    templates: {
	  toast: 'directives/toast/toast.html',
	  progressbar: 'directives/progressbar/progressbar.html'
	},
    timeOut: 2000,
    titleClass: 'toast-title',
    toastClass: 'toast'
  });
});