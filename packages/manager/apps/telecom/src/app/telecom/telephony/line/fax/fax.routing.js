import template from './fax.html';
import controller from './fax.controller';

export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('telecom.telephony.billingAccount.line.dashboard.fax', {
    url: '/fax',
    views: {
      'lineInnerView@telecom.telephony.billingAccount.line.dashboard': {
        template,
        controller,
        controllerAs: 'LineFaxCtrl',
      },
    },
  });
};
