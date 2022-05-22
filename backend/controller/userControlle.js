const {
  successHandler,
  validHandler,
  errorHandler,
} = require("../responseHandler/rsponseHandler");
const User = require("./../model/userModel");
const validator = require("validator");

//user Register
exports.userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // validation
    validHandler({ name, email, password });
    if (!validator.isEmail(email)) {
      errorHandler("Enter your valid email.", res);
    } else {
      const user = await User.create({
        name,
        email,
        password,
      });
      if (user) {
        successHandler(user, res);
      } else {
        errorHandler("something went wrong", res);
      }
    }
  } catch (error) {
    if (error.code === 11000) {
      const message = `Duplicate ${Object.keys(error.keyValue)} Entered`;
      errorHandler(message, res);
    } else {
      errorHandler(error, res);
    }
  }
};

//user login
exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    validHandler({ email, password });
    const user = await User.findOne({ email });
    if (!user) {
      errorHandler("User no found", res);
    } else {
      const isPasswordMatch = await user.comparePassword(password);
      if (!isPasswordMatch) {
        errorHandler("Password Does't match.", res);
      } else {
        successHandler(user, res);
      }
    }
  } catch (error) {
    errorHandler(error, res);
  }
};

//Get user details
exports.getUserDetails = async (req, res) => {
  try {
    const uId = req.params.id;
    const user = await User.findById(uId);
    successHandler(user, res);
  } catch (error) {
    errorHandler(error, res);
  }
};

//user update profile
exports.updatedUserProfile = async (req, res) => {
  try {
    const uId = req.params.id;
    const updatedData = {
      name: req.body.name,
      email: req.body.email,
    };
    const user = await User.findByIdAndUpdate(uId, updatedData, {
      new: true,
    });
    if (!user) {
      errorHandler(`User doesn\'t exist with ${uId}`, res);
    }
    successHandler(user, res);
  } catch (error) {
    if (error.name === "CastError") {
      const message = `Resource Not Found: Invalid ${error.path}`;
      errorHandler(message, res);
    } else {
      errorHandler(error, res);
    }
  }
};

//user delete
exports.userDelete = async (req, res) => {
  try {
    const uId = req.params.id;
    const user = await User.findOneAndDelete({ _id: uId });
    successHandler(user, res);
  } catch (error) {
    errorHandler(error, res);
  }
};

//get all users
exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    successHandler(user, res);
  } catch (error) {
    errorHandler(error, res);
  }
};
//get all users
exports.getSingleUsers = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById({ _id: id });
    successHandler(user, res);
  } catch (error) {
    errorHandler(error, res);
  }
};

//User logOut
exports.logOutUser = async (req, res) => {
  try {
    const user = null;
    successHandler(user, res);
  } catch (error) {
    errorHandler(error, res);
  }
};
