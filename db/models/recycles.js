const mongoose = require("mongoose");

const recycleSchema = new mongoose.Schema({
  businessName: String,
  location: String,
  address: String,
  email: String,
  phone: String,
  outlets: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Recycle = mongoose.model('Recycle', recycleSchema);

module.exports = Recycle;