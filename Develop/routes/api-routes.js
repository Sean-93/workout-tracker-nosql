const Workout = require('../models/workout')
const APIrouter = require('express').Router();

APIrouter.get("/api/workouts", (req, res) => {
    Workout.find().then(workout => {
        res.json(workout);
    }).catch(err => {
        res.json(err);
    });
});

APIrouter.post("/api/workouts", (req, res) => {
    Workout.create(req.body).then(workout => {
        res.json(workout);
    }).catch(err => {
        res.json(err);
    });
});
//This put route 
APIrouter.put("/api/workouts", (req, res) => {
    Workout.update(req.body).then(({ _id }) => {
        res.json(workout);
    }).catch(err => {
        res.json(err);
    });
});

APIrouter.delete("/api/workouts", (req, res) => {
    Workout.findByIdAndDelete(req.body).then(({ _id }) => {
        res.json(workout);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = APIrouter;