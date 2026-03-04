const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: false, // Not required for Google users
    },

    googleId: {
      type: String,
    },

    profilePic: {
      type: String,
    },

    resetOtp: String,
    resetOtpExpire: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", authSchema);