// require mongoose
var mongoose = require('mongoose');

var ActivitySchema = new mongoose.Schema({
    expertiseId: { type: String},
    name: { type: String, required: true},
    hours: {type: Number, required: true, min: 0},
    description: {type: String},
    date: { type: String}
});
var Activity = mongoose.model('Activity', ActivitySchema); // We are setting this Schema in our Models as 'Activity'
   