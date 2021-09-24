/**
	Redirect users from undesired domains to branded domain for primo.
**/
var jQueryScript = document.createElement("script");
jQueryScript.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName("head")[0].appendChild(jQueryScript);

jQueryScript.onload = function() {
	$(document).ready(function(){
    let domains = ["ucsb-primo.hosted.exlibrisgroup.com", "na07.primo.exlibrisgroup.com", "ucsb.primo.exlibrisgroup.com"];
		if (domains.includes(window.location.host)) {
			var oldPath = window.location.pathname + window.location.search;
			window.location.replace("https://search.library.ucsb.edu" + oldPath);
	  }
	});
};