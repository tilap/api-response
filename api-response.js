var jsonResponse = function(){
  var self = this;

  self.space = 2;
  self.replacer = null;
  self.httpStatus = {
    200 : 'OK',
    201 : 'Created',
    202 : 'Accepted',
    203 : 'Non-Authoritative Information',
    204 : 'No Content',
    205 : 'Reset Content',
    206 : 'Partial Content',
    400 : 'Bad Request',
    401 : 'Unauthorized',
    402 : 'Payment Required',
    403 : 'Forbidden',
    404 : 'Not Found',
    405 : 'Method Not Allowed',
    406 : 'Not Acceptable',
    407 : 'Proxy Authentication Required',
    408 : 'Request Timeout',
    409 : 'Conflict',
    410 : 'Gone',
    411 : 'Length Required',
    412 : 'Precondition Failed',
    413 : 'Request Entity Too Large',
    414 : 'Request-URI Too Long',
    415 : 'Unsupported Media Type',
    416 : 'Requested Range Not Satisfiable',
    417 : 'Expectation Failed',
    500 : 'Internal Server Error',
    501 : 'Not Implemented',
    502 : 'Bad Gateway',
    503 : 'Service Unavailable',
    504 : 'Gateway Timeout',
    505 : 'HTTP Version Not Supported'
  };

  self.init = function(){
  };

  self.apiResponse = function ( status, data, message) {
    status = status || 200;
    data = data || {};
    message = message || '';
    error = false;

    if(''===message && self.httpStatus.hasOwnProperty(status)) {
      message = self.httpStatus[status];
    }

    var output = {
      status: status,
      message: message,
      data: data
    };

    self.res.set({
      'Content-Type': 'application/json'
    });
    self.res.set('Content-Type', 'application/json');

    self.res.status = status;

    self.res.json(output);
    return null;
  };

  self.setHeaders = function( out, status ){
    console.log('pouet');
    self.res.set({
      'Content-Type': 'application/json'
    });
    self.res.set('Content-Type', 'application/json');
    self.res.json( status, out );
    return null;
  };

  self.express = function( req, res, next ){
    self.res = res;
    self.req = req;
    res.apiResponse = self.apiResponse;
    next();
  };

  self.init();
};

module.exports = new jsonResponse();
