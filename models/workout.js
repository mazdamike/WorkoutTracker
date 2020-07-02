const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// const exerciseSchema = new Schema({
//     day: {
//       type: Date,
//       trim: true,
//       required: "Enter a day"
//     },
//     exercise: [{
//           day: String,
//           type:{
//             type: String,
//             trim: true,
//             required: 'Enter an exercise type'
//           },
//            String,
//           name:{
//             type: String
//           } String,
//           duration: Number,
//           weight: Number,
//           reps: Number,
//           sets: Number,
//           distance: Number
//     }]

const workoutSchema = new Schema({
  day: {
    type: String,
    trim: true,
    required: "Enter a day"
  },
  type: {
    type: String,
    trim: true,
    required: "Choose a type of exercise"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter the name of the exercise"
  },
  duration: {
    type: Number,
    required: "Enter the duration"
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  distance: {
    type: Number,
  }
 });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;