const Table = require("../models/TableReservation.js");

exports.tableReservation = async (req, res) => {
  try {
    const { bookingDate, bookingTime, username, useremail, numberOfPerson } =
      req.body;
    if (
      !bookingDate ||
      !bookingTime ||
      !username ||
      !useremail ||
      !numberOfPerson
    ) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    const tableReservation = await Table.create({
      bookingDate,
      bookingTime,
      username,
      useremail,
      numberOfPerson,
    });
    
    return res.status(200).json({
      success: true,
      tableReservation,
      message: "Table Reservation Successfull",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Table reservation failed. Please try again.",
    });
  }
};
