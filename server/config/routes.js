var users = require('../controllers/users.js');
var activities = require('../controllers/activities.js');
var expertises = require('../controllers/expertises.js');
module.exports = function(app) {
    // users
    app.post('/getuser', function(req, res) {
        users.getUser(req,res);
    })

    app.post('/create', function(req, res) {
        users.create(req,res);
    })

    // expertise
    app.post('/getexpertise', function(req, res) {
        expertises.getExpertise(req,res);
    })

    app.post('/getexpertiseid', function(req, res) {
        expertises.getExpertiseByID(req,res);
    })

    app.post('/createexpertise', function(req, res) {
        expertises.create(req,res);
    })

    app.post('/editexpertise', function(req, res) {
        expertises.edit(req,res);
    })

    app.post('/deleteexpertise', function(req, res) {
        expertises.delete(req,res);
    })

    // activity
    app.post('/createactivity', function(req, res) {
        activities.create(req,res);
    })

    app.post('/editactivity', function(req, res) {
        activities.edit(req,res);
    })

    // get multiple activities depending on expertise id
    app.post('/getactivity', function(req, res) {
        activities.getActivity(req,res);
    })

    // get single activity from activity id
    app.post('/getoneactivity', function(req, res) {
        activities.getOneActivity(req,res);
    })

    app.get('/getallactivities', function(req, res) {
        activities.find_all(req,res);
    })

    app.post('/deleteactivity', function(req, res) {
        activities.delete(req,res);
    })

    app.post('/deleteactivityinexpertise', function(req, res) {
        activities.deleteFromExpertise(req,res);
    })

    app.all('*', (req, res) => {
        res.sendFile(path.resolve
        ('public/dist/index.html'));
    });
}