/**
 * Begin Alert Bar
 * Code courtesy of UCI
 */
var alertBanner = window.setInterval(function () {
  var date = new Date();
  if (date.getFullYear() == 2023 && date.getMonth() > 7  && date.getMonth() < 10) {
    var prmAlertBar = document.getElementsByClassName('topbar-wrapper');
    var alertBarDiv = document.createElement('div');
    alertBarDiv.setAttribute('id', 'customAlertBar');
    alertBarDiv.setAttribute('style', 'align-content: center;align-items: center;');
    alertBarDiv.setAttribute('layout-align', 'center center');
    var alertBarInnerDiv = document.createElement('div');

    if ((date.getMonth() == 8 && date.getDate() > 10 && date.getDate() < 23)) {
      alertBarInnerDiv.setAttribute('style', 'text-align: center;background-color: #FFCE34;padding: 3px 0;font-size: 15px; color: #000000; font-family: Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif;');
        alertBarInnerDiv.innerHTML = 'September 18-22, 2023: Art & Architecture General Collection print materials with call numbers N-NC will be unavailable while they are relocated to the <a class="alertBarHoverImg" href="https://www.library.ucsb.edu/files/artslibraryprojectn-nchighlightedpng">2nd floor, Mountain Side<span><img src="custom/01UCSB_INST-UCSB/img/bannerMap.png" alt="second floor map" width="40%" height="auto" /></span></a>.<br> To learn more, <a href="https://www.library.ucsb.edu/arts-library-project">click here</a>.';
    }
    else if ((date.getMonth() == 8 && date.getDate() > 22) || (date.getMonth() == 9 && date.getDate() < 24)) {
      alertBarInnerDiv.setAttribute('style', 'text-align: center;background-color: #FFCE34;padding: 3px 0;font-size: 18px; color: #000000; font-family: hind_regularregular, Helvetica, Arial, sans-serif; line-height: 1.5em; font-weight: 600');
      alertBarInnerDiv.innerHTML = 'Art & Architecture General Collection print materials with call numbers N-NC are temporarily located on the <a class="alertBarHoverImg" href="https://www.library.ucsb.edu/files/artslibraryprojectn-nchighlightedpng">2nd floor, Mountain Side<span><img src="custom/01UCSB_INST-UCSB/img/bannerMap.png" alt="second floor map" width="40%" height="auto" /></span></a>.<br> To learn more, <a href="https://www.library.ucsb.edu/arts-library-project">click here</a>.';
    }
    alertBarDiv.appendChild(alertBarInnerDiv);
    prmAlertBar[0].prepend(alertBarDiv);
    clearInterval(alertBanner);
  }
}, 5000);
/**
 * End Alert Bar
 */
