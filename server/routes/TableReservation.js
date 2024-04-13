const express = require("express");
const { tableReservation } = require("../controllers/TableReservation");
const router = express.Router();

// ***************************************************************
//                      Table Reservation Routes
// ***************************************************************
router.post("/reserve-a-table", tableReservation);

module.exports = router
