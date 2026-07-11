const contactRoutes = require("./src/routes/contact.routes");

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
// const dotenv = require("dotenv");

// dotenv.config();
const corsOptions = require("./src/config/cors");
const app = express();

/*
|--------------------------------------------------------------------------
| Middleware
|--------------------------------------------------------------------------
*/

app.use(helmet());

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use("/api", contactRoutes);
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Cevolve Contact API 🚀",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "Server is healthy",
  });
});

/*
|--------------------------------------------------------------------------
| 404 Handler
|--------------------------------------------------------------------------
*/

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

module.exports = app;
