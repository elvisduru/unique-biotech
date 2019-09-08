const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const adminSchema = new mongoose.Schema({
  orderID: String,
  customer: {
    firstName: String,
    lastName: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    postCode: String,
    telephone: String,
    mobile: String,
  },
  total: Number,
  items: [],
  approved: {
    type: Boolean,
    default: false
  },
  declined: {
    type: Boolean,
    default: false
  },
  created: {
    type: Date, default: Date.now
  }
})

adminSchema.plugin(passportLocalMongoose);

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;