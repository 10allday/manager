angular
  .module('Module.ip.controllers')
  .controller(
    'IpDeleteVirtualMacCtrl',
    ($scope, $rootScope, $timeout, $translate, IpVirtualMac, Alerter) => {
      $scope.data = $scope.currentActionData; // service and sub

      /* Action */

      $scope.deleteVirtualMac = function deleteVirtualMac() {
        $scope.loading = true;
        IpVirtualMac.deleteVirtualMac(
          $scope.data.ipBlock.service.serviceName,
          $scope.data.ipBlock.virtualMac.virtualMacs[$scope.data.ip.ip],
          $scope.data.ip.ip,
        )
          .then(() => $timeout(angular.noop, 1000)) // add some delay for task to be created
          .then(() => {
            $rootScope.$broadcast('ips.table.refresh');
            Alerter.success(
              $translate.instant('ip_virtualmac_delete_success', {
                t0:
                  $scope.data.ipBlock.virtualMac.virtualMacs[$scope.data.ip.ip],
                t1: $scope.data.ip.ip,
              }),
            );
          })
          .catch((reason) => {
            Alerter.error(`
              ${$translate.instant('ip_virtualmac_delete_failure', {
                t0:
                  $scope.data.ipBlock.virtualMac.virtualMacs[$scope.data.ip.ip],
                t1: $scope.data.ip.ip,
              })}
            <br />
            ${reason.message}`);
          })
          .finally(() => $scope.resetAction());
      };
    },
  );
