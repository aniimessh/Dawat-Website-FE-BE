const { tableConfirmationMail } = require("../email/tableConfirmationMail.js");
const OTP = require("../models/OTP.js");
const Table = require("../models/TableReservation.js");
const mailSender = require("../utils/mailSender.js");
const otpGenerator = require("otp-generator");

exports.tableReservation = async (req, res) => {
  try {
    const {
      bookingDate,
      bookingTime,
      username,
      useremail,
      numberOfPerson,
      otp,
    } = req.body;
    if (
      !bookingDate ||
      !bookingTime ||
      !username ||
      !useremail ||
      !numberOfPerson ||
      !otp
    ) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    const response = await OTP.find({ useremail })
      .sort({ createdAt: -1 })
      .limit(1);
    console.log("===>",response);
    if (response.length === 0) {
      // OTP not found for the email
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    } else if (otp !== response[0].otp) {
      // Invalid OTP
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    }

    const tableReservation = await Table.create({
      bookingDate,
      bookingTime,
      username,
      useremail,
      numberOfPerson,
    });

    const emailResponse = await mailSender(
      useremail,
      `Your Table Reservation Has Been Confirmed`,
      tableConfirmationMail(username, bookingTime)
    );
    console.log("Email Sent Successfully", emailResponse);

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

exports.sendVerificationOTP = async (req, res) => {
  try {
    const { useremail } = req.body;
    var otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    const result = await OTP.findOne({ otp: otp });
    console.log("Result is Generate OTP Func");
    console.log("OTP", otp);
    console.log("Result", result);
    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
      });
    }
    const otpPayload = { useremail, otp };
    const otpBody = await OTP.create(otpPayload);
    console.log("OTP Body", otpBody);
    res.status(200).json({
      success: true,
      message: `OTP Sent Successfully`,
      otp,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "OTP Cannot Be Sent",
      error: err.message,
    });
  }
};
