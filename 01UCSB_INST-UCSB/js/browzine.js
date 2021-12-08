/**
 * Begin BrowZine - Primo Integration...
**/
window.browzine = {
  api: "https://public-api.thirdiron.com/public/v1/libraries/88",
  apiKey: "0a35d6bf-4236-4be5-b795-cfa48ce87da9",

  journalCoverImagesEnabled: true,

  journalBrowZineWebLinkTextEnabled: true,
  journalBrowZineWebLinkText: "View Journal Contents",

  articleBrowZineWebLinkTextEnabled: true,
  articleBrowZineWebLinkText: "View Issue Contents",

  articlePDFDownloadLinkEnabled: true,
  articlePDFDownloadLinkText: "Download PDF",

  articleLinkEnabled: true,
  articleLinkText: "Read Article",

  printRecordsIntegrationEnabled: true,

  unpaywallEmailAddressKey: "itops@library.ucsb.edu",

  articlePDFDownloadViaUnpaywallEnabled: true,
  articlePDFDownloadViaUnpaywallText: "Download PDF (via Unpaywall)",

  articleLinkViaUnpaywallEnabled: true,
  articleLinkViaUnpaywallText: "Read Article (via Unpaywall)",

  articleAcceptedManuscriptPDFViaUnpaywallEnabled: true,
  articleAcceptedManuscriptPDFViaUnpaywallText: "Download PDF (Accepted Manuscript via Unpaywall)",

  articleAcceptedManuscriptArticleLinkViaUnpaywallEnabled: true,
  articleAcceptedManuscriptArticleLinkViaUnpaywallText: "Read Article (Accepted Manuscript via Unpaywall)",
};

browzine.script = document.createElement("script");
browzine.script.src = "https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js";
document.head.appendChild(browzine.script);

app.controller('prmSearchResultAvailabilityLineAfterController', function($scope) {
  window.browzine.primo.searchResult($scope);
});
/**
 * ... End BrowZine - Primo Integration
**/