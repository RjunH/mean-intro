/**
 * Created by arjun on 31/3/16.
 */

var express = require('express'),
    app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/client/views/index.html');
});

app.listen(8000, function(){
   console.log('I am listening on 8000 port');
});