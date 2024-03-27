/**
 * Begin Alert Bar
 * Code courtesy of UCI
 */
var alertBanner = window.setInterval(function () {
  var prmAlertBar = document.getElementsByClassName('topbar-wrapper');
  var alertBarDiv = document.createElement('div');
  alertBarDiv.setAttribute('id', 'customAlertBar');
  alertBarDiv.setAttribute('style', 'align-content: center;align-items: center;');
  alertBarDiv.setAttribute('layout-align', 'center center');
  var alertBarInnerDiv = document.createElement('div');
  alertBarInnerDiv.setAttribute('style', 'text-align: center;background-color: #FFCE34;padding: 3px 0;font-size: 15px; color: #000000; font-family: Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif;');
  alertBarInnerDiv.innerHTML = 'Some Art & Architecture collection materials are currently inaccessible for browsing due to construction and must be requested.<br> Requested materials will be paged Monday-Friday and must be picked up at the Services Desk. <a href="https://www.library.ucsb.edu/arts-library-project">Learn more.</a>';
  alertBarDiv.appendChild(alertBarInnerDiv);
  prmAlertBar[0].prepend(alertBarDiv);
  clearInterval(alertBanner);
}, 5000);
/**
 * End Alert Bar
 */
