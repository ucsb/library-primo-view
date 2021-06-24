/**
 * 
 * Courtesy of https://github.com/cbaksik/HVD2/blob/master/js/prm-brief-result-container-after.js
 * This component add a "Finding Aid" button and make a link
 * 
**/
(function () {
  angular.module('viewCustom')
  .controller('prmBriefResultContainerAfterCtrl',['$location','$scope',function ($location,$scope) {
    var vm=this;
    var param=$location.search();
    vm.cssClass='marginLeftFindingAid';
    vm.findingAid={'displayLabel':'','linkURL':'','newLinkURL':''};
    vm.$onInit=()=>{
      // get links data from primo parent-ctrl binding data
      $scope.$watch('vm.parentCtrl.links',()=>{
        // find $$Elinktofa
        if(vm.parentCtrl.links) {
          for(var i=0; i < vm.parentCtrl.links.length; i++) {
            var linkItem=vm.parentCtrl.links[i];
            var falink = '';
            if(linkItem.displayLabel === 'Finding aid') {
              vm.findingAid = linkItem;
              if(linkItem.linkURL){
                falink = linkItem.linkURL;
              }
              vm.findingAid.newLinkURL = falink;
              i = vm.parentCtrl.links.length;
            }
          }
        }
      });
      // add more padding when it is full display page
      if(param.docid) {
        vm.cssClass='marginLeftFindingAid2';
      }
    };
  }]);
  angular.module('viewCustom')
  .component('prmBriefResultContainerAfter',{
    bindings:{parentCtrl:'<'},
    controller: 'prmBriefResultContainerAfterCtrl',
    controllerAs:'vm',
    templateUrl:'custom/01UCSB_INST-UCSB/html/prm-brief-result-container-after.html'
  });
})();