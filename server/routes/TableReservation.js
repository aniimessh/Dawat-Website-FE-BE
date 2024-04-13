const express = require("express");
const { tableReservation, sendVerificationOTP } = require("../controllers/TableReservation");
const router = express.Router();

// ***************************************************************
//                      Table Reservation Routes
// ***************************************************************
router.post("/reserve-a-table", tableReservation);
router.post("/send-otp", sendVerificationOTP);

module.exports = router;
