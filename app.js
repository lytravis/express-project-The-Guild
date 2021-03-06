const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { sequelize } = require("./db/models");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const { csrfProtection, asyncHandler } = require("./routes/utils");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const shelvesRouter = require("./routes/game-shelves");
const gamesRouter = require("./routes/games");
const reviewsRouter = require("./routes/reviews");
const searchRouter = require("./routes/search");
const { logUserOut, logUserIn, restoreUser } = require("./auth");


const app = express();

// view engine setup
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// set up session middleware
const store = new SequelizeStore({ db: sequelize });

app.use(
  session({
    secret: "superSecret",
    store,
    saveUninitialized: false,
    resave: false,
  })
);

app.use(restoreUser);

// create Session table if it doesn't already exist
store.sync();

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/game_shelves", shelvesRouter);
app.use("/games", gamesRouter);
app.use("/reviews", reviewsRouter);
app.use("/search", searchRouter )

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
