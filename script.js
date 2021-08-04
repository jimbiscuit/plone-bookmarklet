javascript:
var destination = "";//destination that will be append at the end of the URL
var in_place = false;//if true the path will not be removed
var current_url = new URL(document.URL);
var new_url = "";
if (in_place) {
  new_url = current_url.href.concat("/", destination);
} else {
  if (current_url.port != "") {
    var plone_id = (current_url.pathname.split("/"))[1];
    new_url = current_url.origin.concat("/", plone_id, "/", destination);
  } else {
    new_url = current_url.origin.concat("/", destination);
  }
}
window.location.href = new_url;