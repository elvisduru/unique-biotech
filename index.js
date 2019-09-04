const express = require('express');
const session = require("express-session");
const path = require('path');
const bodyParser = require('body-parser');
const passport = require("passport");
const { Admin } = require('./models');
const MongoStore = require('connect-mongo')(session);

const app = express();

app.use(
  session({
    secret: 'iamunique',
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false
  })
)

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(Admin.createStrategy());

passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

app.get('/api/getID', (req, res) => {
  const chars = [..."ABCDEFGHJKLMNPQRSTUVWXYZ0123456789"];
  const orderID = [...Array(6)].map(
    i => chars[(Math.random() * chars.length) | 0]
  ).join``;
  res.send(orderID);
})

app.post('/api/order', (req, res) => {
  console.log(req.body);
  res.send("received")
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("App is listening on port ", port));