/**
 * Created by arjun on 31/3/16.
 */

var express = require('express'),
    app = express(),
    parser = require('body-parser'),
    mongoose = require('mongoose'),
    meetupsCtrl = require('./server/controllers/meetup');

mongoose.connect('mongodb://localhost:27017/mean-intro');
app.use(parser());

app.get('/', function(req, res){
    res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.get('/api/meetups', meetupsCtrl.list);
app.post('/api/meetups', meetupsCtrl.create);

app.listen(3000, function(){
   console.log('I am listening on 3000 port');
});