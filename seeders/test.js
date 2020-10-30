let mongoose = require("mongoose");
let workouts = require("../models/Workouts");

mongoose.connect("mongodb://localhost/lessondb", {
  useNewUrlParser: true,
  useFindAndModify: false
});


workouts.insertMany(workoutSeed);
// workouts.deleteMany({})
//   .then(() => db.Workout.collection.insertMany(workoutSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
