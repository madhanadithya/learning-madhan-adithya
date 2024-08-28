console.log("starting express with nodemon");

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var productRouter = require("./routes/products");
var authorsRouter = require("./routes/authors");
var todosRouter = require("./routes/todos");
var carRentalUsersRouter = require("./routes/carRentalUsers");
var bookRouter = require("./routes/books");
var categoryRouter = require("./routes/category");
var imageRouter = require("./routes/imageRoutes");
var resumeRouter = require("./routes/resumeRoutes");
var videoRouter = require("./routes/videoRoutes");

const mongoose = require("mongoose");

const { log, error } = require("console");

require("./models/todo");

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/product", productRouter);
app.use("/authors", authorsRouter);
app.use("/todos", todosRouter);
app.use("/carRentalUsers", carRentalUsersRouter);
app.use("/books", bookRouter);
app.use("/category", categoryRouter);
app.use("/profile", imageRouter);
app.use("/resume", resumeRouter);
app.use("/video", videoRouter);

let mongoConnUrl = "mongodb://localhost/ascendion";
mongoose.connect(mongoConnUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let db = mongoose.connection;
db.on("error", function () {
  console.log("error came in connecting");
});

db.on("connected", function () {
  console.log("connected to mongoose database named ascendion");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
