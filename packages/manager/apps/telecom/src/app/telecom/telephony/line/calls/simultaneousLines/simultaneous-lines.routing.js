import template from './simultaneous-lines.html';
import controller from './simultaneous-lines.controller';

export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state(
    'telecom.telephony.billingAccount.line.dashboard.calls.simultaneousLines',
    {
      url: '/simultaneousLines',
      views: {
        'lineView@telecom.telephony.billingAccount.line.dashboard': {
          template,
          controller,
          controllerAs: 'LineSimultaneousLinesCtrl',
        },
      },
    },
  );
};
