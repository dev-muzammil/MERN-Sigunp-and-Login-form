const User = require("../models/user-model");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already registered" });
    }

    const hash_password = await bcrypt.hash(password, 10);
    const userCreated = await User.create({
      username,
      email,
      password: hash_password,
    });
    return res.status(200).json({
      userCreated,
      message: "Registration successful",
      uerId: userCreated._id.toString(),
      token: await userCreated.generateToken(),
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid email" });
    }
    const user = await bcrypt.compare(password, userExist.password);
    if (user) {
      return res
        .status(200)
        .json({
          message: "Login Successful",
          uerId: userExist._id.toString(),
          token: await userExist.generateToken(),
        });
    } else {
      return res.status(400).json("Invalid Credentials");
    }
  } catch (error) {}
};

module.exports = { register, login };
