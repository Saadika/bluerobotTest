(function() {
  'use strict';

  angular
    .module('bluerobot')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
