const dotenv = require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8081;

//log request
app.use(morgan("tiny"));

//parse request to body-parser
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname, "views/ejs"));

app.use("/css", express.static(path.resolve(__dirname, "public/css")));
app.use("/img", express.static(path.resolve(__dirname, "public/img")));
app.use("/js", express.static(path.resolve(__dirname, "public/js")));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
