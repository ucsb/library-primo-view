(function(){
  "use strict";
  'use strict';
  
  var app = angular.module('viewCustom', ['angularLoad', 'externalSearch', 'hathiTrustAvailability']);
  
  app.component('prmSearchResultAvailabilityLineAfter', {
    template: '<hathi-trust-availability hide-online="true" hide-if-journal="false" ignore-copyright="true" entity-id="urn:mace:incommon:ucsb.edu"></hathi-trust-availability>'
  });
  /**
   *  Hides hold requests if there are none.
  **/
  app.component('prmLocationItemsAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'LocationItemsAfterController'
  });
  
  app.controller('LocationItemsAfterController', ['$scope', function ($scope) {
    var vm = this.parentCtrl;
    var statement = null;
  
    this.$onInit = function () {
      // Keep checking until the availability statement loads
      var availabilityInterval = window.setInterval(function () {
        if (statement == null) {
          statement = vm.loc.location.availabilityStatement;
        } else {
          // Stop the interval and check if statement needs updating
          clearInterval(availabilityInterval);
          if (statement.includes(", 0 holds")) {
            statement = statement.replace(", 0 holds", "");
            // Find the p element and replace the text.
            var paragraph = document.evaluate("//p[@ng-if='$ctrl.currLoc.location.availabilityStatement']", document, null, XPathResult.ANY_TYPE, null);
            paragraph = paragraph.iterateNext();
            paragraph.innerHTML = statement;
          }
        }
      }, 100);
    };
  }]);
  /**
   * 
   * Courtesy of https://github.com/cbaksik/HVD2/blob/master/js/prm-brief-result-container-after.js
   * This component add a "Finding Aid" button and make a link
   * 
  **/
  (function () {
    angular.module('viewCustom').controller('prmBriefResultContainerAfterCtrl', ['$location', '$scope', function ($location, $scope) {
      var vm = this;
      var param = $location.search();
      vm.cssClass = 'marginLeftFindingAid';
      vm.findingAid = { 'displayLabel': '', 'linkURL': '', 'newLinkURL': '' };
      vm.$onInit = function () {
        // get links data from primo parent-ctrl binding data
        $scope.$watch('vm.parentCtrl.links', function () {
          // find $$Elinktofa
          if (vm.parentCtrl.links) {
            for (var i = 0; i < vm.parentCtrl.links.length; i++) {
              var linkItem = vm.parentCtrl.links[i];
              var falink = '';
              if (linkItem.displayLabel === 'Finding aid') {
                vm.findingAid = linkItem;
                if (linkItem.linkURL) {
                  falink = linkItem.linkURL;
                }
                vm.findingAid.newLinkURL = falink;
                i = vm.parentCtrl.links.length;
              }
            }
          }
        });
        // add more padding when it is full display page
        if (param.docid) {
          vm.cssClass = 'marginLeftFindingAid2';
        }
      };
    }]);
  
    angular.module('viewCustom').component('prmBriefResultContainerAfter', {
      bindings: { parentCtrl: '<' },
      controller: 'prmBriefResultContainerAfterCtrl',
      controllerAs: 'vm',
      templateUrl: 'custom/01UCSB_INST-UCSB/html/prm-brief-result-container-after.html'
    });
  })();
  /* UC Library Search Logo */
  app.controller('SearchBarAfterController', ['$scope', '$rootScope', '$location', '$window', function ($scope, $rootScope, $location, $window) {
    var vm = this;
  
    this.navigateToHomePage = function () {
      var params = $location.search();
      console.log(params);
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
      return 'custom/01UCSB_INST-UCSB/img/ucls-logo.png';
    };
  }]);
  
  app.component('prmSearchBarAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'SearchBarAfterController',
    templateUrl: 'custom/01UCSB_INST-UCSB/html/ucls-logo.html'
  });
  app.value('searchTargets', [{
    "name": "Worldcat",
    "desc": "for advanced search and filtering options",
    "url": "https://110105.on.worldcat.org/v2/search?",
    "img": "custom/01UCSB_INST-UCSB/img/worldcat.png",
    "alt": "Worldcat Logo",
    mapping: function mapping(queries, filters) {
      var query_mappings = {
        'any': 'kw',
        'title': 'ti',
        'creator': 'au',
        'subject': 'su',
        'isbn': 'bn',
        'issn': 'n2'
      };
      try {
        return 'queryString=' + queries.map(function (part) {
          var terms = part.split(',');
          var type = query_mappings[terms[0]] || 'kw';
          var string = terms[2] || '';
          var join = terms[3] || '';
          return type + ':' + string + ' ' + join + ' ';
        }).join('');
      } catch (e) {
        return '';
      }
    }
  }, {
    "name": "Google Scholar",
    "url": "https://scholar.google.com/scholar?q=",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/200px-Google_%22G%22_Logo.svg.png",
    "alt": "Google Scholar Logo",
    mapping: function mapping(queries, filters) {
      try {
        return queries.map(function (part) {
          return part.split(",")[2] || "";
        }).join(' ');
      } catch (e) {
        return '';
      }
    }
  }]);
  /*
   * From https://github.com/alliance-pcsg/primo-explore-external-search
   *
   * With customizations, all commented below.
   */
  
  angular.module('externalSearch', []).value('searchTargets', []).component('prmFacetAfter', {
    bindings: { parentCtrl: '<' },
    controller: ['externalSearchService', function (externalSearchService) {
      externalSearchService.controller = this.parentCtrl;
      externalSearchService.addExtSearch();
    }]
  }).component('prmPageNavMenuAfter', {
    controller: ['externalSearchService', function (externalSearchService) {
      if (externalSearchService.controller) externalSearchService.addExtSearch();
    }]
  }).component('prmFacetExactAfter', {
    bindings: { parentCtrl: '<' },
    template: '\n      <div ng-if="name === \'External Search\'">\n        <div ng-hide="$ctrl.parentCtrl.facetGroup.facetGroupCollapsed">\n          <div class="section-content animate-max-height-variable" id="external-search">\n            <div ng-repeat="target in targets" aria-live="polite" class="md-chip animate-opacity-and-scale facet-element-marker-local4">\n              <div class="md-chip-content layout-row" role="button" tabindex="0">\n                <strong dir="auto" title="{{ target.name }}">\n                  <a ng-href="{{ target.url + target.mapping(queries, filters) }}" target="_blank">\n                    <img ng-src="{{ target.img }}" width="30" height="30"/> {{ target.name }}\n                  </a>\n                  <span class="desc">{{target.desc}}</span>\n                </strong>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>',
    controller: ['$scope', '$location', 'searchTargets', function ($scope, $location, searchTargets) {
      $scope.name = this.parentCtrl.facetGroup.name;
      $scope.targets = searchTargets;
      var query = $location.search().query;
      var filter = $location.search().pfilter;
      $scope.queries = Array.isArray(query) ? query : query ? [query] : false;
      $scope.filters = Array.isArray(filter) ? filter : filter ? [filter] : false;
    }]
  }).factory('externalSearchService', function () {
    return {
      get controller() {
        return this.prmFacetCtrl || false;
      },
      set controller(controller) {
        this.prmFacetCtrl = controller;
      },
      addExtSearch: function addExtSearch() {
        if (this.prmFacetCtrl.$stateParams.search_scope != 'CourseReserves') {
          var xx = this;
          if (xx.prmFacetCtrl.$stateParams.search_scope == 'wcat_profile') {
            xx.prmFacetCtrl.facetService.results.unshift({
              name: 'External Search',
              displayedType: 'exact',
              limitCount: 0,
              facetGroupCollapsed: false,
              values: undefined
            });
          } else {
            var checkExist = setInterval(function () {
              if (xx.prmFacetCtrl.facetService.results[0] && xx.prmFacetCtrl.facetService.results[0].name != "External Search") {
                if (xx.prmFacetCtrl.facetService.results.name != "External Search") {
                  xx.prmFacetCtrl.facetService.results.unshift({
                    name: 'External Search',
                    displayedType: 'exact',
                    limitCount: 0,
                    facetGroupCollapsed: false,
                    values: undefined
                  });
                }
                clearInterval(checkExist);
              }
            }, 50);
          }
        }
      }
    };
  });
  
  angular.module('hathiTrustAvailability', []).constant('hathiTrustBaseUrl', 'https://catalog.hathitrust.org/api/volumes/brief/json/').config(['$sceDelegateProvider', 'hathiTrustBaseUrl', function ($sceDelegateProvider, hathiTrustBaseUrl) {
    var urlWhitelist = $sceDelegateProvider.resourceUrlWhitelist();
    urlWhitelist.push(hathiTrustBaseUrl + '**');
    $sceDelegateProvider.resourceUrlWhitelist(urlWhitelist);
  }]).factory('hathiTrust', ['$http', '$q', 'hathiTrustBaseUrl', function ($http, $q, hathiTrustBaseUrl) {
    var svc = {};
  
    var lookup = function lookup(ids) {
      if (ids.length) {
        var hathiTrustLookupUrl = hathiTrustBaseUrl + ids.join('|');
        return $http.jsonp(hathiTrustLookupUrl, {
          cache: true,
          jsonpCallbackParam: 'callback'
        }).then(function (resp) {
          return resp.data;
        });
      } else {
        return $q.resolve(null);
      }
    };
  
    // find a HT record URL for a given list of identifiers (regardless of copyright status)
    svc.findRecord = function (ids) {
      return lookup(ids).then(function (bibData) {
        for (var i = 0; i < ids.length; i++) {
          var recordId = Object.keys(bibData[ids[i]].records)[0];
          if (recordId) {
            var foundRecord = { recordURL: "", rightsCode: "" };
            foundRecord.recordURL = $q.resolve(bibData[ids[i]].records[recordId].recordURL);
            foundRecord.rightsCode = $q.resolve(bibData[ids[i]].items[0].rightsCode);
            return foundRecord;
          }
        }
        return $q.resolve(null);
      }).catch(function (e) {
        console.error(e);
      });
    };
  
    // find a public-domain HT record URL for a given list of identifiers
    svc.findFullViewRecord = function (ids) {
      var handleResponse = function handleResponse(bibData) {
        var fullTextUrl = null;
        for (var i = 0; !fullTextUrl && i < ids.length; i++) {
          var result = bibData[ids[i]];
          for (var j = 0; j < result.items.length; j++) {
            var item = result.items[j];
            if (item.usRightsString.toLowerCase() === 'full view') {
              fullTextUrl = result.records[item.fromRecord].recordURL;
              break;
            }
          }
        }
        return $q.resolve(fullTextUrl);
      };
      return lookup(ids).then(handleResponse).catch(function (e) {
        console.error(e);
      });
    };
  
    return svc;
  }]).controller('hathiTrustAvailabilityController', ['hathiTrust', function (hathiTrust) {
    var self = this;
  
    self.$onInit = function () {
      if (!self.msg) self.msg = 'Full Text Available at HathiTrust';
  
      // prevent appearance/request iff 'hide-online'
      if (self.hideOnline && isOnline()) {
        return;
      }
  
      // prevent appearance/request iff 'hide-if-journal'
      if (self.hideIfJournal && isJournal()) {
        return;
      }
  
      // prevent appearance/request if item is unavailable
      if (self.ignoreCopyright && !isAvailable()) {
        //allow links for locally unavailable items that are in the public domain
        self.ignoreCopyright = false;
      }
  
      // look for full text at HathiTrust
      updateHathiTrustAvailability();
    };
  
    var isJournal = function isJournal() {
      var format = self.prmSearchResultAvailabilityLine.result.pnx.addata.format[0];
      return !(format.toLowerCase().indexOf('journal') == -1); // format.includes("Journal")
    };
  
    var isAvailable = function isAvailable() {
      var available = self.prmSearchResultAvailabilityLine.result.delivery.availability[0];
      return available.toLowerCase().indexOf('unavailable') == -1;
    };
  
    var isOnline = function isOnline() {
      var delivery = self.prmSearchResultAvailabilityLine.result.delivery || [];
      if (!delivery.GetIt1) return delivery.deliveryCategory.indexOf('Alma-E') !== -1;
      return self.prmSearchResultAvailabilityLine.result.delivery.GetIt1.some(function (g) {
        return g.links.some(function (l) {
          return l.isLinktoOnline;
        });
      });
    };
  
    var formatLink = function formatLink(link) {
      return self.entityId ? link + '?signon=swle:' + self.entityId : link;
    };
  
    var isOclcNum = function isOclcNum(value) {
      return value.match(/^(\(ocolc\))?\d+$/i);
    };
  
    var isProtected = function isProtected(rightsCode) {
      switch (rightsCode) {
        case 'ic':
          return 'Full Text Temporarily Available at HathiTrust';
        case 'pd':
          return 'Full Text Available at HathiTrust';
        default:
          return 'Full Text Temporarily Available at HathiTrust';
      }
    };
  
    var updateHathiTrustAvailability = function updateHathiTrustAvailability() {
      var hathiTrustIds = (self.prmSearchResultAvailabilityLine.result.pnx.addata.oclcid || []).filter(isOclcNum).map(function (id) {
        return 'oclc:' + id.toLowerCase().replace('(ocolc)', '');
      });
      hathiTrust[self.ignoreCopyright ? 'findRecord' : 'findFullViewRecord'](hathiTrustIds).then(function (res) {
        if (res) {
          var record = JSON.parse(JSON.stringify(res));
          self.fullTextLink = formatLink(record.recordURL.$$state.value);
          self.msg = isProtected(record.rightsCode.$$state.value);
        }
      });
    };
  }]).component('hathiTrustAvailability', {
    require: {
      prmSearchResultAvailabilityLine: '^prmSearchResultAvailabilityLine'
    },
    bindings: {
      entityId: '@',
      ignoreCopyright: '<',
      hideIfJournal: '<',
      hideOnline: '<',
      msg: '@?'
    },
    controller: 'hathiTrustAvailabilityController',
    template: '<span ng-if="$ctrl.fullTextLink" class="umnHathiTrustLink">\
                  <md-icon alt="HathiTrust Logo">\
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve">  <image id="image0" width="16" height="16" x="0" y="0"\
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\
                    AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACNFBMVEXuegXvegTsewTveArw\
                    eQjuegftegfweQXsegXweQbtegnsegvxeQbvegbuegbvegbveQbtegfuegbvegXveQbvegbsfAzt\
                    plfnsmfpq1/wplPuegXvqFrrq1znr2Ptok/sewvueQfuegbtegbrgRfxyJPlsXDmlTznnk/rn03q\
                    pVnomkjnlkDnsGnvwobsfhPveQXteQrutHDqpF3qnUnpjS/prmDweQXsewjvrWHsjy7pnkvqqGDv\
                    t3PregvqhB3uuXjusmzpp13qlz3pfxTskC3uegjsjyvogBfpmkHpqF/us2rttXLrgRjrgBjttXDo\
                    gx/vtGznjzPtfhHqjCfuewfrjCnwfxLpjC7wtnDogBvssmjpfhLtegjtnEjrtnTmjC/utGrsew7s\
                    o0zpghnohB/roUrrfRHtsmnlkTbrvH3tnEXtegXvegTveQfqhyHvuXjrrGTpewrsrmXqfRHogRjt\
                    q2Dqewvqql/wu3vqhyDueQnwegXuegfweQPtegntnUvnt3fvxI7tfhTrfA/vzJvmtXLunEbtegrw\
                    egTregzskjbsxI/ouoPsqFzniyrz2K3vyZnokDLpewvtnkv30J/w17XsvYXjgBbohR7nplnso1L0\
                    1Kf40Z/um0LvegXngBnsy5juyJXvsGftrGTnhB/opVHoew7qhB7rzJnnmErkkz3splbqlT3smT3t\
                    tXPqqV7pjzHvunjrfQ7vewPsfA7uoU3uqlruoEzsfQ/vegf///9WgM4fAAAAFHRSTlOLi4uLi4uL\
                    i4uLi4uLi4tRUVFRUYI6/KEAAAABYktHRLvUtndMAAAAB3RJTUUH4AkNDgYNB5/9vwAAAQpJREFU\
                    GNNjYGBkYmZhZWNn5ODk4ubh5WMQERUTl5CUEpWWkZWTV1BUYlBWUVVT19BUUtbS1tHV0zdgMDQy\
                    NjE1MzRXsrC0sraxtWOwd3B0cnZxlXZz9/D08vbxZfDzDwgMCg4JdQsLj4iMio5hiI2LT0hMSk5J\
                    TUvPyMzKzmHIzcsvKCwqLiktK6+orKquYZCuratvaGxqbmlta+8QNRBl6JQ26Oru6e3rnzBx0uQ8\
                    aVGGvJopU6dNn1E8c9bsOXPniYoySM+PXbBw0eIlS5fl1C+PFRFlEBUVXbFy1eo1a9fliQDZYIHY\
                    9fEbNm7avEUUJiC6ddv2HTt3mSuBBfhBQEBQSEgYzOIHAHtfTe/vX0uvAAAAJXRFWHRkYXRlOmNy\
                    ZWF0ZQAyMDE2LTA5LTEzVDE0OjA2OjEzLTA1OjAwNMgVqAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAx\
                    Ni0wOS0xM1QxNDowNjoxMy0wNTowMEWVrRQAAAAASUVORK5CYII=" />\
                    </svg> \
                  </md-icon>\
                  <a target="_blank" ng-href="{{$ctrl.fullTextLink}}">\
                  {{ ::$ctrl.msg }}\
                    <prm-icon external-link="" icon-type="svg" svg-icon-set="primo-ui" icon-definition="open-in-new"></prm-icon>\
                  </a>\
                </span>'
  });
  })();