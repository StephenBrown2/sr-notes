// ==UserScript==
// @name         Find Scott's paintings!
// @namespace    stephenbrown2.opa
// @version      0.1
// @description  Searches links of images to find Scott Royston
// @match        http://opaonlineshowcase.com/*
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

var paintings = document.getElementsByClassName('entry_data');
for (var i = 0; i < paintings.length; i++) {
    var entry = paintings[i];
    var profile_url = entry.getElementsByTagName("a")[0];
    var profile = getDocument(profile_url);
    var artist = profile.querySelector("#welcome > table > tbody > tr").children[1].getElementsByTagName("a")[0].firstChild.nodeValue;
    if (artist.match(/royston/gi)) {
        console.log('Found: '+artist);
        entry.style.border = '3px solid limegreen';
    }
}
//    http://opaonlineshowcase.com/artist/31030
