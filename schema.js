const mongoose = require("mongoose");

const data_schema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  bloodgroup: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("hris_collection", data_schema);
