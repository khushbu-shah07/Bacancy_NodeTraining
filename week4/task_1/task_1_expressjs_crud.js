/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable array-callback-return */
const bodyParser = require("body-parser");
const express = require("express");
const { default: helmet } = require("helmet");

const app = express();
const {
  globalErrorHandler,
} = require("./middlewares/task_5_global_errorHandler.js");
const { adminMiddleware } = require("./middlewares/task_2_adminMiddleware");
const { authMiddleware } = require("./middlewares/task_3_jwtMiddleware.js");
// const { helmetMiddleware } = require("./middlewares/task_6_helmetMiddleware");

const apiRouter = require("./routes/router");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(globalErrorHandler); // Task 5 - globalerrorhandler
app.use(adminMiddleware); // Task 2 - admin middleware
app.use(authMiddleware); // Task 3 - jwt middleware
app.use(helmet()); // Task 6 - Helmet Middleware

app.get("/", (req, res) => {
  res.send("Server is working!");
});

app.use("/api/v1", apiRouter);
const PORT = 3000;

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
