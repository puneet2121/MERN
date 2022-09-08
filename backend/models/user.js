const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
 name: {
  type: String,
  required: true,
  maxlength: 32,
  trim:true
 },
 lastname: {
  type: String,
  required: false,
  maxlength: 32,
  trim:true
 },
 userinfo: {
  type: String,
  trim: true
 },
 email: {
  type: String,
  required: true,
  trim: true,
  unique: true
 },
 password: {
  type: String,
  trim: true
 },
 salt: String,

 role: {
  type: Number,
  default: 0,
 },
 purchases: {
  type: Array,
  default: []
 }

});

module.exports = mongoose.model("User",userSchema)