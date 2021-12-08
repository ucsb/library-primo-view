/***
 * 
 * Modules and templates
 * 
***/
var app = angular.module('viewCustom', ['angularLoad', 'externalSearch', 'hathiTrustAvailability']);

app.component('prmSearchResultAvailabilityLineAfter', {
    /* HathiTrust template */
    template: '<hathi-trust-availability hide-online="true" hide-if-journal="false" ignore-copyright="false" entity-id="urn:mace:incommon:ucsb.edu"></hathi-trust-availability>',
    /* Browzine components */
    bindings: { parentCtrl: '<' },
    controller: 'prmSearchResultAvailabilityLineAfterController'
  });