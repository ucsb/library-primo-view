/**
 * 
 * UC Library Search Logo
 * 
**/
app.controller('SearchBarAfterController', ['$scope', '$rootScope', '$location', '$window', function ($scope, $rootScope, $location, $window) {
	var vm = this;

	this.navigateToHomePage = function () {
	  var params = $location.search();
	  var vid = params.vid;
	  var lang = params.lang || "en_US";
	  var split = $location.absUrl().split('/discovery/');

	  if (split.length === 1) {
      console.log(split[0] + ' : Could not detect the view name!');
      return false;
	  }

	  var baseUrl = split[0];
	  $window.location.href = baseUrl + '/discovery/search?vid=' + vid + '&lang=' + lang;
	  return true;
	};
	
	this.getUclsLogo = function () {
		return 'custom/01UCSB_INST-UCSB/img/ucls-logo.png'
	}
}]);

app.component('prmSearchBarAfter', {
	bindings: { parentCtrl: '<' },
	controller: 'SearchBarAfterController',
	templateUrl: 'custom/01UCSB_INST-UCSB/html/ucls-logo.html'
});