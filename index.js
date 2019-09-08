const express = require('express');
const session = require("express-session");
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const passport = require("passport");
const { Admin, Order, Contact, Recycle, Subscribe } = require('./db/models');
const MongoStore = require('connect-mongo')(session);
const dbConnection = require('./db');
const adminRoutes = require("./routes/admin");
const app = express();

app.use(
  session({
    secret: 'iamunique',
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false
  })
)

app.use(methodOverride("_method"));

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

app.post('/api/orders', (req, res) => {
  const order = new Order(req.body);
  order.save();

  res.send("received")
})

app.get('/api/orders/:id', async (req, res) => {
  try {
    let orders;
    if (req.params.id === "pending") {
      orders = await Order.find({ approved: false, declined: false });
    }
    else if (req.params.id === "completed") {
      orders = await Order.find({ approved: true, declined: false });
    } else if (req.params.id === "declined") {
      orders = await Order.find({ declined: true });
    } else {
      orders = await Order.find({})
    }

    res.status(200).json(orders);
  } catch (err) {
    console.log(err)
  }
})

app.put('/api/orders/approve/:id', async (req, res) => {
  try {
    const order = await Order.findOneAndUpdate({ orderID: req.params.id }, { approved: true }, { new: true });
    res.status(200).send(`Completed Order: ${order.orderID} successfully`)
  } catch (err) {
    console.log(err)
  }
})

app.put('/api/orders/undoApprove/:id', async (req, res) => {
  try {
    const order = await Order.findOneAndUpdate({ orderID: req.params.id }, { approved: false }, { new: true });
    res.status(200).send(`Updated Order: ${order.orderID} successfully`)
  } catch (err) {
    console.log(err)
  }
})

app.put('/api/orders/decline/:id', async (req, res) => {
  try {
    const order = await Order.findOneAndUpdate({ orderID: req.params.id }, { declined: true }, { new: true });
    res.status(200).send(`Declined Order: ${order.orderID} successfully`)
  } catch (err) {
    console.log(err)
  }
})

app.put('/api/orders/undoDecline/:id', async (req, res) => {
  try {
    const order = await Order.findOneAndUpdate({ orderID: req.params.id }, { declined: false }, { new: true });
    res.status(200).send(`Updated Order: ${order.orderID} successfully`)
  } catch (err) {
    console.log(err)
  }
})

app.route('/api/contact')
  .get(async (req, res) => {
    try {
      const contacts = await Contact.find({}).sort({ createdAt: -1 });
      res.status(200).json({ contacts })
    } catch (err) {
      console.log(err);
    }
  })
  .post(async (req, res) => {
    try {
      if (!req.body.firstName && !req.body.lastName && !req.body.email && !req.body.phone) {
        throw Error("Please Fill the required fields!")
      }
      const contact = new Contact(req.body);
      contact.save();

      res.status(201).json({ sent: true })
    } catch (err) {
      console.log(err);
      res.json({ sent: false, err })
    }
  })

app.delete('/api/contact/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send(`Deleted Submission successfully`)
  } catch (err) {
    console.log(err);
  }
})

app.delete('/api/recycle/:id', async (req, res) => {
  try {
    await Recycle.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send(`Deleted Submission successfully`)
  } catch (err) {
    console.log(err);
  }
})

app.route('/api/recycle')
  .get(async (req, res) => {
    try {
      const recycles = await Recycle.find({}).sort({ createdAt: -1 });
      res.status(200).json({ recycles })
    } catch (err) {
      console.log(err);
    }
  })
  .post(async (req, res) => {
    try {
      if (!req.body.email && !req.body.phone) {
        throw Error("Please Fill the required fields!")
      }
      const recycle = new Recycle(req.body);
      recycle.save();

      res.status(201).json({ sent: true })
    } catch (err) {
      console.log(err);
      res.json({ sent: false, err })
    }
  })

app.route('/api/subscribe')
  .get(async (req, res) => {
    try {
      const subscribers = await Subscribe.find({}).sort({ createdAt: -1 });
      res.status(200).json({ subscribers })
    } catch (err) {
      console.log(err);
    }
  })
  .post(async (req, res) => {
    try {
      const subscribe = new Subscribe(req.body)
      subscribe.save();
      res.status(201).json({ sent: true })
    } catch (err) {
      console.log(err);
      res.json({ sent: false, err })
    }
  })

app.delete('/api/subscribe/:id', async (req, res) => {
  try {
    await Subscribe.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send(`Deleted Submission successfully`)
  } catch (err) {
    console.log(err);
  }
})

app.use("/api/admin", adminRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("App is listening on port ", port));