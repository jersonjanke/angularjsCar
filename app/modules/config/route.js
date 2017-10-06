import fleetsHtml from '../fleets/fleets.html';
import fleetsController from '../fleets/fleets.controller';

function routes($stateProvider) {

  $stateProvider
    .state('fleets', {
      url: '/fleets',
      template: fleetsHtml,
      controller: fleetsController,
      controllerAs: 'vm'
    });
}

export default routes;
