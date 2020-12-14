//Connect to Mongo database
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// const uri = 'mongodb://localhost:27017/unique'
// const uri = 'mongodb://elvisduru:unique123@ds149606.mlab.com:49606/unique'
const uri =
  "mongodb+srv://elvisduru:unique123@unique.lqrez.mongodb.net/unique?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true }).then(
  () => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    console.log("Connected to Mongo");
  },
  (err) => {
    /** handle initial connection error */
    console.log("error connecting to Mongo: ");
    console.log(err);
  }
);

module.exports = mongoose.connection;
