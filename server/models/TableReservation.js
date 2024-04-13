const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema(
  {
    bookingDate: {
      type: String,
      required: true,
      trim: true,
    },
    bookingTime: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    useremail: {
      type: String,
      required: true,
      trim: true,
    },
    numberOfPerson: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tableReservation", tableSchema);
