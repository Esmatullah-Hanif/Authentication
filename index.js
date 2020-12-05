const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

// imported routes
// const authRoutes = require("./routes/auth");
 const userRoutes = require("./routes/users");


// intialize app
const app = express();

// middlewares
app.use('/users', userRoutes);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//setting the view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// routes

// parse application/json
//app.use(bodyParser.json())



const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
