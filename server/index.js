const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const database = require("./config/database");
const tableRoutes = require("./routes/TableReservation");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 4000;

database.connect();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// api Routes
app.use("/api/v1/table", tableRoutes);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is running up",
  });
});

app.listen(PORT, () => console.log(`App is running on ${PORT}`));
