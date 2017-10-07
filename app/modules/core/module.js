import angular from 'angular';
import uirouter from 'angular-ui-router';
import animate from 'angular-animate';
import sanitize from 'angular-sanitize';
import toastr from 'angular-toastr';
import select from 'ui-select';
import uiMask from 'angular-ui-mask';

const exports = {name: 'core'};


angular.module(exports.name, [
    uirouter,  
    sanitize,
    select,  
    animate,
    toastr,
    uiMask,
    'angularUtils.directives.dirPagination'
]);

export default exports;