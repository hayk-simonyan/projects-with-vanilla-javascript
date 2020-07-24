// Constructor
function customAJAXLibrary() {
  this.http = new XMLHttpRequest();
}

// GET
customAJAXLibrary.prototype.get = function (url, cb) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      cb(null, self.http.responseText);
    } else {
      cb('Error: ' + self.http.status);
    }
  };

  this.http.send();
};

// POST
customAJAXLibrary.prototype.post = function (url, body, cb) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    cb(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(body));
};

// PUT
customAJAXLibrary.prototype.put = function (url, body, cb) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    cb(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(body));
};

// DELETE
customAJAXLibrary.prototype.delete = function (url, cb) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      cb(null, 'Deleted task');
    } else {
      cb('Error: ' + self.http.status);
    }
  };

  this.http.send();
};
