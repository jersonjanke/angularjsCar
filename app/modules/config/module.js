import angular from 'angular';
import routes from './route';
import FleetsCtrl from '../fleets/fleets.controller';
import FleetsService from '../fleets/fleets.service';

const exports = { name: 'modules' };

angular.module(exports.name, [])  
  .controller('FleetsCtrl', FleetsCtrl)  
  .service('FleetsService', FleetsService)
  .config(routes);

export default exports;
