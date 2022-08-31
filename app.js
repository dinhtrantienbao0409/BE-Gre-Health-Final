var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const database = require("./databases/connect");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const authRouter = require("./routes/api/auth");
const recordRouter = require("./routes/api/record");
const doctorRouter = require("./routes/api/doctor");
const patientRouter = require("./routes/api/patient");
const receptionistRouter = require("./routes/api/receptionist");

var app = express();

// swagger docs
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Gre Health Final-year Project",
    version: "1.0.0",
  },
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./routes/api/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/record", recordRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/patient", patientRouter);
app.use("/api/receptionist", receptionistRouter);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//connect MongoDB IIFE
(async () => {
  await database.connectDb();
})();

module.exports = app;
