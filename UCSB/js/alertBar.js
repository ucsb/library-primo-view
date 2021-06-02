/*** 
 * 
 * Alert bar displayed at top of Primo view.
 * 
 * Code courtesy of UCI
 * 
 * ***/
var alertBanner = window.setInterval(function () {
  var date = new Date();

  /* different date conditions may be added to control when the banner appears */
  if (date.getFullYear() == 2021 && date.getMonth() < 8) {
    var prmAlertBar = document.getElementsByClassName('topbar-wrapper');
    var alertBarDiv = document.createElement('div');
    alertBarDiv.setAttribute('id', 'customAlertBar');
    alertBarDiv.setAttribute('style', 'align-content: center;align-items: center;');
    alertBarDiv.setAttribute('layout-align', 'center center');
    var alertBarInnerDiv = document.createElement('div');
    alertBarInnerDiv.setAttribute('style', 'text-align: center;background-color: #fcd02f;padding: 3px 0;font-size: 16px;');

    /* alert banner message to customize */
    alertBarInnerDiv.innerHTML = 'Changes are coming! On July 27th this search tool will be replaced with a new systemwide tool - UC Library Search.<br>Learn more at the <a href="https://libraries.universityofcalifornia.edu/uclibrarysearch">UC Library Search website.';
    alertBarDiv.appendChild(alertBarInnerDiv);
    prmAlertBar[0].prepend(alertBarDiv);
    clearInterval(alertBanner);
  }
}, 5000);