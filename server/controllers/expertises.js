var mongoose = require('mongoose');
var Expertise = mongoose.model('Expertise');
module.exports = {
    find_all: function(req,res) {
        Expertise.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
            console.log('error');
        })
    },
    getExpertise: function(req,res) {
        console.log("hello the data is", req.body);
        Expertise.find({user: req.body.name})
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            res.json(err);
            console.log('error');
        })
    },
    getExpertiseByID: function(req,res) {
        console.log("hello the data is", req.body);
        Expertise.find({_id: req.body.id})
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            res.json(err);
            console.log('error');
        })
    },
    create: function(req, res) {
        console.log('POST DATA', req.body);
        Expertise.create(req.body)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
            console.log('error');
        })
    },
    edit: function(req, res) {
        console.log('POST DATA', req.body);
        Expertise.update({_id: req.body.id}, {name: req.body.name, description: req.body.description})
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            res.json(err);
            console.log('error');
        })
    },
    delete: function(req, res) {
        console.log('Deleting question....', req.body);
        
        Expertise.remove({_id: req.body.id}, function(err, result){
            // This code will run when the DB has attempted to remove all matching records to {_id: 'insert record unique id here'}
            if(err){
                console.log('error', err);
                return res.json(err);
            }
            else{
                return res.json(result);
            }
        })
    }
}