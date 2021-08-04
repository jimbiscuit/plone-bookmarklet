# plone-bookmarklet

Plone Bookmarklet is a js script that redirect to location often used of a Plone website. The script handle if you run the website trough the port or a DNS.

## instalation

clone the repos on local

```bash
git clone git@github.com:jimbiscuit/plone-bookmarklet.git
```

And then in your web browser go to your bookmark manager and import ```bookmark.html```.

## Create your own bookmarklet

Copy an existing bookmarklet and edit the URL of the new bookmarklet at the start of the script there is two variable :

This one define the path that will be append at the end of the URL :
```javascript
var destination = "";
```
This one set if the path after the host will be removed (```false```) or not (```true```)

```javascript
var in_place = false;
```
