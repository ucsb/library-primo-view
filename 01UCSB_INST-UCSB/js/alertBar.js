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

    /* alert banner message to customize by specific date*/
    if (date.getDate() > 19) {
      alertBarInnerDiv.setAttribute('style', 'text-align: center;background-color: #E00000;padding: 3px 0;font-size: 16px; color: #FFFFFF;');
      alertBarInnerDiv.innerHTML = 'Changes are imminent! On July 27th this search tool will be replaced with a new systemwide tool - UC Library Search.<br>Learn more at the <a style="color: #ffffff; text-decoration: underline;" href="https://libraries.universityofcalifornia.edu/uclibrarysearch">UC Library Search website.</a>';      
    }
    else if (date.getDate() > 12) {
      alertBarInnerDiv.setAttribute('style', 'text-align: center;background-color: #FF8000;padding: 3px 0;font-size: 16px; color: #000000;');
      alertBarInnerDiv.innerHTML = 'Changes are coming soon! On July 27th this search tool will be replaced with a new systemwide tool - UC Library Search.<br>Learn more at the <a style="color: #000000; text-decoration: underline;" href="https://libraries.universityofcalifornia.edu/uclibrarysearch">UC Library Search website.</a>';
    }
    else {
      alertBarInnerDiv.setAttribute('style', 'text-align: center;background-color: #fcd02f;padding: 3px 0;font-size: 16px;');
      alertBarInnerDiv.innerHTML = 'Changes are coming! On July 27th this search tool will be replaced with a new systemwide tool - UC Library Search.<br>Learn more at the <a href="https://libraries.universityofcalifornia.edu/uclibrarysearch">UC Library Search website.</a>';
    }
    
    alertBarDiv.appendChild(alertBarInnerDiv);
    prmAlertBar[0].prepend(alertBarDiv);
    clearInterval(alertBanner);
  }
}, 5000);