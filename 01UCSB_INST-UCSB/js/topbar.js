/**
 * 
 * Change top color when in sandbox environment.
 * 
**/
var jQueryScript = document.createElement("script");
jQueryScript.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName("head")[0].appendChild(jQueryScript);

jQueryScript.onload = function() {
	$(document).ready(function(){
    let sandbox = "ucsb-psb.primo.exlibrisgroup.com";
    if (sandbox === window.location.host) {
			$(function(){
        $("<style>")
          .text("prm-search-bar, prm-journals-search-bar, prm-browse-search-bar, prm-tags-search-bar { background-color: #FFCE34; }")
          .appendTo($("body"));
      });
	  }
	});
};