/**
 * Created by arjun on 3/4/16.
 */
var Meetup = require('../models/meetup');

module.exports.create = function create(req, res){
    console.log(req.body);
    var meetup = new Meetup(req.body);
    meetup.save(function(err, result){
        res.json(result);
    });
};

module.exports.list = function list(req, res){
    Meetup.find({},function(err, result){
        res.json(result);
    })
};