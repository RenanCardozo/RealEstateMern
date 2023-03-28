const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const process = require("process");

const SECRET_KEY = process.env.SECRET_KEY;
console.log(SECRET_KEY);

//create user and store in session and cookies
module.exports.register = async (req, res) => {
  User.create(req.body)
    .then((user) => {
      const userToken = jwt.sign({ id: user._id }, SECRET_KEY);
      console.log(userToken);
      res
        .cookie("usertoken", userToken, { httpOnly: true })
        .json({
          msg: "User created successfully",
          user: user,
          token: userToken,
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "Something went wrong" });
    });
};

// cookies
module.exports.cookie = (req, res) => {
  res.cookie("test", "test", { httpOnly: true }).json("success");
};

//get all users
module.exports.getAllUsers = (req, res) => {
  User.find()
    .then((users) => res.cookie("test", "test", { httpOnly: true }).json(users))
    .catch((err) => res.status(500).json(err));
};

// login function stores in session and cookies
// module.exports.login = async (req, res) => {
//   const user = await User.findOne({ email: req.body.email });
//   if (!user) {
//     return res.status(400).json({ msg: "User not found" });
//   }
//   const validPassword = await bcrypt.compare(req.body.password, user.password);
//   if (!validPassword) {
//     return res.status(400).json({ msg: "Invalid password" });
//   }
//   const userToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
//   res.cookie("usertoken", userToken, { httpOnly: true });
//   res.status(200).json({ msg: "Login successful", user: user });
// };
module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
  .then((user) => {
      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          const userToken = jwt.sign({ id: user._id }, SECRET_KEY);
          console.log(userToken);
          res
          .cookie("usertoken", userToken, { httpOnly: true })
          .json({
              msg: "Login successful",
              user: user,
              token: userToken,
            });
        } else {
          return res.status(404).json({ msg: "Invalid credentials" });
        }
      });
    })
  .catch((err) => res.status(500).json(err));
};

//logout function
module.exports.logout = (req, res) => {
  res.clearCookie("usertoken");
  res.status(200).json({ msg: "Logout successful" });
};

//get user by id
module.exports.getUser = (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .populate("allProperties")
    .then((oneUser) => res.json(oneUser))
    .catch((err) => res.status(500).json(err));
};


module.exports.updateUsers = async (req, res) => {
  try {
      const response = await User.findByIdAndUpdate({ _id: req.params.id },
          req.body,
          {
              new: true
          })
      res.json(response)
  } catch (err) {
      res.status(400).json(err)
  }
}

