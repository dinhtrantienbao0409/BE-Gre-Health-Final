var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const database = require("./databases/connect");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const { isLoggedIn } = require("./middlewares/auth");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const authRouter = require("./routes/api/auth");
const recordRouter = require("./routes/api/record");
const formRouter = require("./routes/api/form");

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

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/auth", authRouter);
// app.use("/api/record", isLoggedIn, recordRouter);
app.use("/api/record", recordRouter);
// app.use("/api/form", isLoggedIn, formRouter);
app.use("/api/form", formRouter);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//connect MongoDB IIFE
(async () => {
  await database.connectDb();
})();

module.exports = app;
