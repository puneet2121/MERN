const mongoose = require("mongoose");
const crypto = require("node:crypto");
const uuidv1 = require("uuid");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    lastname: {
      type: String,
      required: false,
      maxlength: 32,
      trim: true,
    },
    userinfo: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    enc_password: {
      type: String,
      required: true,
    },
    salt: String,

    role: {
      type: Number,
      default: 0,
    },
    purchases: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);
userSchema
  .virtual("password")
  .set(function (password) {
    this.password = password;
    this.salt = uuidv1();
    this.enc_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.method = {
  autheticate: function (plainpassword) {
    return this.securePassword(plainpassword) === this.enc_password;
  },

  securePassword: function (plainpassword) {
    if (!password) {
      return "";
    }
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};
module.exports = mongoose.model("User", userSchema);
