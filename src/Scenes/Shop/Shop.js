import React, { Component } from 'react';
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

export default class Shop extends Component {
  state = {
    items: []
  }

  handleAddItem = (item) => {
    this.setState(prevState => ({ items: [...prevState.items, item] }))
  }

  render() {
    return (
      <div className={styles.Shop}>
        <ShopMenu />
        <Switch>
          <Route exact path="/shop" component={Products} />
          <Route exact path="/shop/soil" render={(props) => <Product amount={15999.99} handleAddItem={this.handleAddItem} {...props} image={progSoil} name="Proganics Soil" description="Our proganics Soil is rich in primary and secondary nutrients and is essential in promoting plant growth and it improves the natural qualities of soil for agriculture. Calcium, nitrogen and magnesium makes our proganics soil perfect for root development and crop management." />} />
          <Route exact path="/shop/oil" render={(props) => <Product amount={15999.99} handleAddItem={this.handleAddItem} {...props} image={progOil} name="Proganics Oil" description="Proganics Oil is composed of high quality fatty acids with a high acid content which contains antimicrobial properties. Proganics oil is a healthy fat ingredient which is made from the black soldier fly larvae. Our proganics oil can also be blended with other ingredients in formulated pet food, aquaculture and animal feeds. Our proganics Oil is mechanically pressed out of the dry larvae, to provide a high fat oil rich lauric acid, which is only found in coconut and palm kernels oils." />} />
          <Route exact path="/shop/meal" render={(props) => <Product amount={15999.99} handleAddItem={this.handleAddItem} {...props} image={progMeal} name="Proganics Meal" description="Proganics Meal contains microbial properties that helps in the development of animals which feed on it. Rich in premium proteins (70%+), fibers and healthy fats, the meal is gotten from the larvae of dried black soldier fly. Our highly nutritious proganics meal serves as good food for chickens, birds and other animals." />} />
          <Route exact path="/shop/larvae" render={(props) => <Product amount={15999.99} handleAddItem={this.handleAddItem} {...props} image={progLarvae} name="Proganics Larvae" description="" />} />
          <Route path="/checkout" exact render={(props) => <Checkout {...props} />} />
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}
