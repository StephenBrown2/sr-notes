// ==UserScript==
// @name         Find Scott's paintings!
// @namespace    stephenbrown2.all
// @version      0.1
// @description  Searches links to find Scott Royston
// @match        *
// @copyright    2014+, Stephen Brown II
// @license      GNU GPL v3.0 or later. http://www.gnu.org/copyleft/gpl.html
// ==/UserScript==

function getDocument(url) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET",url,false);
  xmlhttp.send();
  var resptxt = xmlhttp.responseText;
  var docimpl = document.implementation.createHTMLDocument(null);
  docimpl.documentElement.innerHTML = resptxt;
  return docimpl;
}

var allLinks = document.links;
for (var i=0; i<allLinks.length; i++) {
    var link = allLinks[i].href;
    var page = getDocument(page);
    if (page.match(/royston/gi)) {
        allLinks[i].style.border = '3px solid limegreen';
    }
}
