const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
      },
      "muzammil",
      { expiresIn: "30d" }
    );
  } catch (error) {
    console.log(error)
  }
};

const User = new mongoose.model("User", userSchema);

module.exports = User;
