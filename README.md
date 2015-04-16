# Api Response Middleware for express

Basic Express middleware to simply output json response for Api, set the http
status code and a default message if none is provided.

Allow to easily send Api response with that json format:

    {
        status: 200,
        message: 'OK',
        data: {
            property: 'value'
        }
    }

Automatically add default message depending on the status if none is provided.

Moreover, set the express res status the same as the json response.

## Usecase

    var express = require('express');
    var app = express();

    var apiResponse = require('api-response');

    app.use( apiResponse.express );

    app.get('/api/ok',function(req,res){
       res.apiResponse(200, {property: 'value'}, 'A custom message');
    });

    app.get('/api/ok',function(req,res){
       res.apiResponse(200, {property: 'value'}, 'A custom message');
    });

    app.listen(8080);

