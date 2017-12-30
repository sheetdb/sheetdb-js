function read(slug_or_url, options) {
  return new Promise(function (resolve, reject) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open("GET", sheetDbUrlGet(slug_or_url, options), true);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onerror = function (e) {
      reject(e);
    };

    xhr.send();
  });
}
