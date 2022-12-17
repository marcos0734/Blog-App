const user = require("../model/schemas/userSchema");
const userSchema = require("../model/schemas/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSignUp = async (req, res) => {
  try {
    let { email, password } = req.body;
    // console.log("emaillllllllllll", req.body);
    const userData = userSchema({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      city: req.body.city,
      state: req.body.state,
      isActive: req.body.isActive,
    });
    console.log(req.body);

    const userExists = await user.findOne({ email: email });
    if (userExists) {
      return res.send({ status: "FAILED", message: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    userData.password = await bcrypt.hash(password, salt);

    // const filepath = `/uploads/${req.file.filename}`;
    // userData.profilepic = filepath;

    let addUser = userData.save();
    console.log("addUser");

    res.status(201).json({
      status: 201,
      message: "Register Successfull",
    });
  } catch (err) {
    console.log(err);
    res.status(401).send("Something went wrong");
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log("logggggin", req.body);

    if (email && password) {
      const User = await user.findOne({ email: email });

      if (User != null) {
        const isMatch = await bcrypt.compare(password, User.password);

        if (User.email == email && isMatch) {
          // generate JWT
          const token = jwt.sign(
            { userId: User._id },
            process.env.JWT_SECRET_KEY,
            {
              expiresIn: "5D",
            }
          );

          res.status(202).send({
            status: "success",
            message: "Login Success",
            Token: token,
          });
        } else {
          res.status(401).send({
            status: "failed",
            message: "Email or Password is not valid",
          });
        }
      } else {
        res
          .status(404)
          .send({ status: "failed", message: "User Not Exist SignUp First" });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (email) {
      const user = await user.findOne({ email: email });

      if (user) {
        const secret = user._id + process.env.JWT_SECRET_KEY;
        const token = jwt.sign({ userId: user._id }, secret, {
          expiresIn: "15m",
        });
        const link = `http://127.0.0.1:9000/api/user/reset/${user._id}/${token}`;

        console.log("Link:", link);
        console.log("Email:", user.email);

        let info = await transporter.sendEmail({
          from: "harsh.bhawsar16@gmail.com",
          to: email,
          subject: "Password Reset Link",
          html: `<a href=${link}> click here yo reset password </a>`,
        });

        res.status().json({
          message: "Password reset email sent.",
          Info: info,
        });
      } else {
        res.status().json({
          message: "Email is required",
        });
      }
    } else {
      res.json({ message: "User Not Found" });
    }
  } catch (error) {}
};

module.exports = {
  userSignUp,
  userLogin,
  forgetPassword,
};
