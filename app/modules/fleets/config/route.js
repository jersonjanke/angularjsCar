import fleetsHtml from '../fleets.html';
import fleetsController from '../fleets.controller';

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
