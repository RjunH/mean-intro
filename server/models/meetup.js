/**
 * Created by arjun on 3/4/16.
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('Meetup',{
    name : String
});