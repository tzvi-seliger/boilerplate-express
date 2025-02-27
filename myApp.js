var bodyParser = require("body-parser");
var express = require("express");
var app = express();
require("dotenv").config();

// --> 7)  Mount the Logger middleware here

app.use(function(req, res, next) {
  console.log(`${req.method}, ${req.path} ${req.ip}`);
  next();
});
// --> 11)  Mount the body-parser middleware  here

app.use(bodyParser.urlencoded({ extended: false }));
/** 1) Meet the node console. */
console.log("Hello World");

/** 2) A first working Express Server */

// app.get("/", function(req, res){
//     res.send("response string")
// })

/** 3) Serve an HTML file */
app.get("/", function(req, res) {
  res.sendFile(`${__dirname}/views/index.html`);
});

/** 4) Serve static assets  */
app.use(express.static(`${__dirname}/public`));

/** 5) serve JSON on a specific route */
// app.get("/", function(req, res) {
//   let obj = {
//     message: "Hello json"
//   };
//   if (process.env.MESSAGE_STYLE === "uppercase") {
//     obj.message = obj.message.toUpperCase();
//   }
//   res.json(obj);
// });

/** 6) Use the .env file to configure the app */

/** 7) Root-level Middleware - A logger */
//  place it before all the routes !

/** 8) Chaining middleware. A Time server */

app.get(
  "/time",
  function(req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function(req, res) {
    res.json({ time: req.time });
  }
);
/** 9)  Get input from client - Route parameters */
app.get("/:word/echo", function(req, res) {
  res.json({ echo: req.params.word });
});
/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
app.post("/name", function(req, res) {
  res.json(req.body);
});
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !

//app.route(path).get(handler).post(handler)

/** 12) Get data form POST  */

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = app;
