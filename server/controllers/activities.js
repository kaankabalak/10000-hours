var mongoose = require('mongoose');
var Activity = mongoose.model('Activity');
module.exports = {
    find_all: function(req,res) {
        Activity.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
            console.log('error');
        })
    },
    getOneActivity: function(req,res) {
        console.log("hello the data is", req.body);
        Activity.find({_id: req.body.id})
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            res.json(err);
            console.log('error');
        })
    },
    getActivity: function(req,res) {
        console.log("hello the data is", req.body);
        Activity.find({expertiseId: req.body.id}).sort({_id:-1})
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
        Activity.create(req.body)
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
        Activity.update({_id: req.body.id}, {name: req.body.name, hours: req.body.hours, description: req.body.description})
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
        
        Activity.remove({_id: req.body.id}, function(err, result){
            // This code will run when the DB has attempted to remove all matching records to {_id: 'insert record unique id here'}
            if(err){
                console.log('error', err);
                return res.json(err);
            }
            else{
                return res.json(result);
            }
        })
    },
    deleteFromExpertise: function(req, res) {
        console.log('Deleting activity from expertise id....', req.body);
        
        Activity.remove({expertiseId: req.body.id}, function(err, result){
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