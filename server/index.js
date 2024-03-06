const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cookiePerser = require('cookie-parser')

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookiePerser)


mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then(user => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          res.json("Success");
        } else {
          res.json("Password is Incorrect");
        }
      });
    } else {
      res.json("No record found");
    }
  });
});


app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
