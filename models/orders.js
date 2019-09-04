var mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
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

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;