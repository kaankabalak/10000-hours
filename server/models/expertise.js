// require mongoose
var mongoose = require('mongoose');

var ExpertiseSchema = new mongoose.Schema({
    name: {type: String, required: true, maxlength: 25},
    description: {type: String},
    user: {type: String}
});
var Expertise = mongoose.model('Expertise', ExpertiseSchema); // We are setting this Schema in our Models as 'Activity'