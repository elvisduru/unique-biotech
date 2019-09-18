import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch, Redirect } from 'react-router-dom';
import styles from './Shop.module.css';
import ShopMenu from './ShopMenu/ShopMenu';
import Products from './Products/Products';
import Product from './Product/Product';

import progOil from '../../images/progoil.jpg';
import progSoil from '../../images/progsoil.jpg';
import progMeal from '../../images/progmeal.jpg';
import progLarvae from '../../images/slide08.jpg';
import Checkout from './Checkout/Checkout';
import Shipping from './Shipping/Shipping';
import Billing from './Billing/Billing';
import Confirm from './Confirm/Confirm';
import Footer from '../../containers/Footer/Footer';
import ContactBox from '../../components/ContactBox/ContactBox';

export default class Shop extends Component {
  state = {
    items: [
      {
        id: "oil",
        name: "Proganics Oil",
        price: 15999.99,
        quantity: 0,
        image: progOil
      },
      {
        id: "soil",
        name: "Proganics Soil",
        price: 15999.99,
        quantity: 0,
        image: progSoil
      },
      {
        id: "meal",
        name: "Proganics Meal",
        price: 15999.99,
        quantity: 0,
        image: progMeal
      },
      {
        id: "larvae",
        name: "Proganics Larvae",
        price: 15999.99,
        quantity: 0,
        image: progLarvae
      }
    ],
    shipping: 200,
    total: 0,
    fields: {
      firstName: "",
      lastName: "",
      email: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      postCode: "",
      telephone: "",
      mobile: "",
    },
    orderID: "",
    key: "pk_test_5b990862db0b2dc72dfeaa3d96fa813afcfc586c"
  }

  updateTotal = () => {
    const items = [...this.state.items].filter(item => item.quantity > 0)
    const subtotal = items.reduce((a, b) => {
      return (a + ((b.price * b.quantity) || 0))
    }, 0)

    const total = subtotal + this.state.shipping;
    this.setState({ total })
  }

  handleInput = (evt) => {
    const fields = { ...this.state.fields };
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields })
  }

  handleAddItem = (item) => {
    var items = [...this.state.items].map(x => {
      if (x.id === item.id) {
        x.quantity = item.quantity
      }
      return x;
    })
    this.setState({ items });
  }

  handleIncrease = (id) => {
    const items = [...this.state.items];
    const itemIndex = items.findIndex(x => x.id === id);
    items[itemIndex].quantity++;
    this.setState({ items })
  }

  handleDecrease = (id) => {
    const items = [...this.state.items];
    const itemIndex = items.findIndex(x => x.id === id);
    if (items[itemIndex].quantity > 1) {
      items[itemIndex].quantity--;
      this.setState({ items })
    } else return
  }

  handleRemoveItem = (id) => {
    const items = [...this.state.items];
    const itemIndex = items.findIndex(x => x.id === id);
    items[itemIndex].quantity = 0;
    this.setState({ items })
  }

  componentDidMount() {
    // later generate ID from server
    this.getID();
  }

  getID = async () => {
    try {
      const response = await axios.get('/api/getID');
      this.setState({ orderID: response.data })
    } catch (err) {
      console.log(err)
    }
  }

  processOrder = async () => {
    const data = { ...this.state };
    const customer = data.fields;
    const items = data.items.filter(x => x.quantity > 0);
    const orderID = data.orderID;
    const total = data.total;
    const order = { customer, items, orderID, total }

    try {
      await axios.post('/api/orders', order)
    } catch (err) {
      console.log(err);
    }

  }

  render() {
    return (
      <div className={styles.Shop}>
        <div>
          <ContactBox />
          <ShopMenu items={this.state.items} />
          <Switch>
            <Route exact path="/shop" component={Products} />
            <Route exact path="/shop/soil" render={(props) => <Product quantity={this.state.items[1].quantity} amount={15999.99} handleAddItem={this.handleAddItem} {...props} image={progSoil} name="Proganics Soil" id="soil" description="Our proganics Soil is rich in primary and secondary nutrients and is essential in promoting plant growth and it improves the natural qualities of soil for agriculture. Calcium, nitrogen and magnesium makes our proganics soil perfect for root development and crop management." />} />
            <Route exact path="/shop/oil" render={(props) => <Product quantity={this.state.items[0].quantity} amount={15999.99} handleAddItem={this.handleAddItem} {...props} image={progOil} name="Proganics Oil" id="oil" description="Proganics Oil is composed of high quality fatty acids with a high acid content which contains antimicrobial properties. Proganics oil is a healthy fat ingredient which is made from the black soldier fly larvae. Our proganics oil can also be blended with other ingredients in formulated pet food, aquaculture and animal feeds. Our proganics Oil is mechanically pressed out of the dry larvae, to provide a high fat oil rich lauric acid, which is only found in coconut and palm kernels oils." />} />
            <Route exact path="/shop/meal" render={(props) => <Product quantity={this.state.items[2].quantity} amount={15999.99} handleAddItem={this.handleAddItem} {...props} image={progMeal} name="Proganics Meal" id="meal" description="Proganics Meal contains microbial properties that helps in the development of animals which feed on it. Rich in premium proteins (70%+), fibers and healthy fats, the meal is gotten from the larvae of dried black soldier fly. Our highly nutritious proganics meal serves as good food for chickens, birds and other animals." />} />
            <Route exact path="/shop/larvae" render={(props) => <Product quantity={this.state.items[3].quantity} amount={15999.99} handleAddItem={this.handleAddItem} {...props} image={progLarvae} name="Proganics Larvae" id="larvae" description="Our Proganics Larvae is a natural food source for fish, poultry and other livestock’s with nutritional composition as good as that of fish-meal and far better than that of soya bean. Our Proganics Larvae is a natural super food; it has excellent digestibility and weight-gaining properties, generally tolerant to feed and a reduced cost of feeding for animal farmer’s, providing above 40% crude protein, much calcium, and many amino acids. Under Optimum conditions, the Proganics Larvae weighs an average of 4kg, gotten from 1gram of BSF eggs producing about 22,000 to 25,000 pieces of Larvae." />} />
            <Route exact path="/shop/checkout" render={(props) => <Checkout updateTotal={this.updateTotal} shipping={this.state.shipping} handleRemoveItem={this.handleRemoveItem} handleDecrease={this.handleDecrease} handleIncrease={this.handleIncrease} items={this.state.items} {...props} />} />
            <Route exact path="/shop/shipping" render={(props) => <Shipping fields={this.state.fields} handleInput={this.handleInput} {...props} />} />
            <Route exact path="/shop/billing" render={(props) => <Billing
              shipping={this.state.shipping}
              items={this.state.items}
              fields={this.state.fields}
              total={this.state.total}
              processOrder={this.processOrder}
              orderID={this.state.orderID}
              pkey={this.state.key}
              {...props} />} />
            <Route exact path="/shop/confirm" render={(props) => <Confirm
              orderID={this.state.orderID}
              firstName={this.state.fields.firstName}
              lastName={this.state.fields.lastName}
              items={this.state.items}
              shipping={this.state.shipping}
              total={this.state.total}
              {...props}
            />} />
            <Redirect to="/" />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}
