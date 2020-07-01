const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
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

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;