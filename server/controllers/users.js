var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
module.exports = {
    getUser: function(req,res) {
        console.log(req.body.password);
        User.find({name: req.body.name})
        .then(data => {
            if (bcrypt.compareSync(req.body.password, data[0].password)) {
                res.json(data);
            }
            else {
                res.json(false);
            }
        })
        .catch(err => {
            res.json(err);
            console.log('error');
        })
    },
    create: function(req, res) {
        console.log('POST DATA', req.body);
        req.body.password = bcrypt.hashSync(req.body.password, salt); // Store hash in your password DB. 
        console.log('Req body now is....', req.body);
        User.create(req.body)
        .then(data => {
            console.log('Printing data:', data);
            res.json(data);
        })
        .catch(err => {
            console.log('Printing the error');
            res.json(err);
        })
    }
}