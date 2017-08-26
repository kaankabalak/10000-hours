// require mongoose
var mongoose = require('mongoose');
// create the schema
var UserSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3},
    password: { type: String, required: true, minlength: 8}
});
var User = mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'