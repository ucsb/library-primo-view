/*
 * Didn't find it box
 * Courtesy of UCSC
 */
app.controller('SearchResultListAfterController', ['$scope', '$rootScope', function($scope, $rootScope){
  this.$onInit = function () {
    var vm = this;
    vm.tab = vm.parentCtrl.$stateParams.tab;
    vm.vid = vm.parentCtrl.$stateParams.vid;
    vm.search_scope = vm.parentCtrl.$stateParams.search_scope;

    if (typeof vm.parentCtrl.$stateParams.query === 'object') {
      vm.queryString = vm.parentCtrl.$stateParams.query.join('&query=');
      vm.queryString = vm.queryString + '&mode=advanced';
    } else {
      vm.queryString = vm.parentCtrl.$stateParams.query;
    }
  }

  var libchat = document.createElement("script");
  libchat.src = "https://v2.libanswers.com/load_chat.php?hash=955221b59c9df85fdcfe2e2ef0261789";
  document.head.appendChild(libchat);
}]);

app.component('prmSearchResultListAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'SearchResultListAfterController',
    templateUrl: 'custom/01UCSB_INST-UCSB/html/prmSearchResultListAfter.html',
});
