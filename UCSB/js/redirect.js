/**
	Redirect users from old primo's url to new url.
**/
var jQueryScript = document.createElement("script");
jQueryScript.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName("head")[0].appendChild(jQueryScript);


jQueryScript.onload = function() {
	$(document).ready(function(){
		if (window.location.host === "ucsb-primo.hosted.exlibrisgroup.com" ) {
			var oldPath = window.location.pathname + window.location.search;
			window.location.replace("https://search.library.ucsb.edu" + oldPath);
	  }
	});
};