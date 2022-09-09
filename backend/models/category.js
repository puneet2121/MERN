const mongoose = require("mongoose");

const { Schema } = mongoose;
const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 32,
    trim:true
   },
}, {timestamps: true} )

module.exports = mongoose.model("Category",categorySchema)