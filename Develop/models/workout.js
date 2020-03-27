const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
        type: {
            type: String,
            trim: true,
            required: "You must enter an exercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "You must enter an exercise type"
        },
        duration: {
            type: Number,
            required: "You must enter a duration"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
        }
    ]
  },
  {
    toJSON: {
        virtuals: true
    }
  }
);

const Library = mongoose.model("workout", workoutSchema);

module.exports = Library;
