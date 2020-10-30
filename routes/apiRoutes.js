// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of 'data' sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const workouts = require("../models/Workouts");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/lessondb", {
  useNewUrlParser: true,
  useFindAndModify: false
});


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {


  app.get('/api/workouts', (req, res) => {
    workouts.find({})
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    workouts.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    workouts.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },

      { new: true, runValidators: true }
    )
    .then(workouts => {
      res.json(workouts);
    })
  });

  app.delete("/api/workouts", (req, res) => {
    workouts.findByIdAndDelete(
      req.body.id)
    .then(() => {
      res.json(true);
    })
    .catch(err => {
      res.json(err);
    });
  });

  app.get("/api/workouts/range", (req, res) => {
    workouts.find({}).limit(7)
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.json(err);
      });
      
  });

};
