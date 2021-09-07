/**
 * Collapse institution list in full record for Primo VE
 */
 app.controller('prmAlmaOtherMembersAfterController', [function () {
  var vm = this.parentCtrl;
  /**
   * On page load, hide libraries
   */
  this.$onInit = function () {
    vm.isCollapsed = true;
  };
}]);
app.component('prmAlmaOtherMembersAfter', {
  bindings: {
    parentCtrl: '<'
  },
  controller: 'prmAlmaOtherMembersAfterController',
  template: ''
});
