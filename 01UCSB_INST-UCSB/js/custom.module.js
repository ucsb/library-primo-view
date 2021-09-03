/***
 * 
 * Modules and templates
 * 
***/
var app = angular.module('viewCustom', ['angularLoad', 'externalSearch', 'hathiTrustAvailability']);

app.component('prmSearchResultAvailabilityLineAfter', {
    template: '<hathi-trust-availability hide-online="true" hide-if-journal="false" ignore-copyright="true" entity-id="urn:mace:incommon:ucsb.edu"></hathi-trust-availability>'
  });