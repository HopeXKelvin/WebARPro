var express = require('express');

var app = new express();
var PORT = 3000;
app.listen(PORT, function(){
    console.log('Server listening on port: ' + PORT);
});

app.use('/static', express.static('./'));

app.get('/index', function(req, res){
    res.send('Hello World!');
});