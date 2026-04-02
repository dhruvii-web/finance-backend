const express = require("express");
require("dotenv").config();
require("./config/db");

const app = express(); 

// middleware
app.use(express.json());

// routes

const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes); 

const recordRoutes = require("./routes/recordRoutes");
app.use("/records", recordRoutes);

const dashboardRoutes = require("./routes/dashboardRoutes");
app.use("/dashboard", dashboardRoutes);
// test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});