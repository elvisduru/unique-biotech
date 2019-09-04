var mongoose = require("mongoose");

var Order = require('./orders');
var Admin = require('./admin');

var connUri = "mongodb://localhost/unique";

mongoose.connect(connUri, { useNewUrlParser: true }, err => console.log(err))

mongoose.Promise = Promise;

module.exports = { Order, Admin }