const bodyParser = require("body-parser");
const therapistRouter = require("../routes/therapistRoutes");
const sendEmailRouter = require("../routes/sendEmailRouters");
const patientRouter = require("../routes/patientRouter");
const userRouter = require("../routes/userRouter");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const MONGO_DB_URL = process.env.DB_URL;

mongoose.connect(MONGO_DB_URL);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-New-Token"
  );
  res.header("Access-Control-Expose-Headers", "X-New-Token");
  next();
});
app.use(cors());
app.use(bodyParser.json());
app.use("/therapist", therapistRouter);
app.use("/patient", patientRouter);
app.use("/sendEmail", sendEmailRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
