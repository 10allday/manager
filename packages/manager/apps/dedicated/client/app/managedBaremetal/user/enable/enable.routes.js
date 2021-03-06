export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('app.managedBaremetal.users.enable', {
    url: '/enable',
    params: {
      user: null,
    },
    views: {
      modal: {
        component: 'dedicatedCloudUserEnable',
      },
    },
    layout: 'modal',
    resolve: {
      user: /* @ngInject */ ($transition$) => $transition$.params().user,
    },
  });
};
