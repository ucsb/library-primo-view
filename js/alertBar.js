/**
 * Begin Alert Bar
 * Code courtesy of UCI
 */
var alertBanner = window.setInterval(function () {
  var date = new Date();
  if (date.getFullYear() == 2023 && date.getMonth() < 11) {
    var prmAlertBar = document.getElementsByClassName('topbar-wrapper');
    var alertBarDiv = document.createElement('div');
    alertBarDiv.setAttribute('id', 'customAlertBar');
    alertBarDiv.setAttribute('style', 'align-content: center;align-items: center;');
    alertBarDiv.setAttribute('layout-align', 'center center');
    var alertBarInnerDiv = document.createElement('div');

    if (date.getDate() > 19) {
      alertBarInnerDiv.setAttribute('style', 'text-align: center;background-color: #FFCE34;padding: 3px 0;font-size: 15px; color: #000000; font-family: Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif;');
      alertBarInnerDiv.innerHTML = 'September 18-22, 2023: N-NC subclass art collections will be unavailable while they are relocated to the second floor.<br> <a href="https://libraries.universityofcalifornia.edu/uclibrarysearch">Click here</a> to learn more';      
    }
    else if (date.getDate() > 12) {
      alertBarInnerDiv.setAttribute('style', 'text-align: center;background-color: #FFCE34;padding: 3px 0;font-size: 15px; color: #000000; font-family: Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif;');
      alertBarInnerDiv.innerHTML = 'September 18-22, 2023: N-NC subclass art collections will be unavailable while they are relocated to the second floor.<br> <a href="https://libraries.universityofcalifornia.edu/uclibrarysearch">Click here</a> to learn more';
    }
    else {
        alertBarInnerDiv.setAttribute('style', 'text-align: center;background-color: #FFCE34;padding: 3px 0;font-size: 15px; color: #000000; font-family: Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif;');
        alertBarInnerDiv.innerHTML = 'September 18-22, 2023: N-NC subclass art collections will be unavailable while they are relocated to the second floor.<br> <a href="https://libraries.universityofcalifornia.edu/uclibrarysearch">Click here</a> to learn more.';
    }
    
    alertBarDiv.appendChild(alertBarInnerDiv);
    prmAlertBar[0].prepend(alertBarDiv);
    clearInterval(alertBanner);
  }
}, 5000);
/**
 * End Alert Bar
 */
