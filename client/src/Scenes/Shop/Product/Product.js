import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';
import styles from './Product.module.css';
import shopIcon from '../../../images/shopping-cart.svg';


export default class Product extends Component {
  state = {
    openCheckoutModal: false,
    quantity: this.props.quantity === 0 ? 1 : this.props.quantity,
    amount: this.props.amount,
    subtotal: this.props.amount,
  }

  handleCheckOutModal = () => this.setState(prevState => ({ openCheckoutModal: !prevState.openCheckoutModal }));

  handleIncrease = () => {
    let oldQuantity = this.state.quantity;
    const quantity = oldQuantity + 1;
    const subtotal = this.state.amount * quantity;
    this.setState({ quantity, subtotal })
  }

  handleDecrease = () => {
    if (this.state.quantity === 1) {
      return
    }
    let oldQuantity = this.state.quantity;
    const quantity = oldQuantity - 1;
    const subtotal = this.state.amount * quantity;
    this.setState({ quantity, subtotal })
  }

  handleItem = () => {
    const item = {
      id: this.props.id,
      quantity: this.state.quantity
    }
    this.props.handleAddItem(item);
    this.props.history.push("/shop/checkout");
  }

  render() {
    const checkoutModal = this.state.openCheckoutModal ? (
      <div className={styles.checkoutModal}>
        <div className={styles.backdrop} onClick={this.handleCheckOutModal}></div>
        <Slide bottom>
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.top}>
                <h3>SHOPPING CART</h3>
                <p onClick={this.handleCheckOutModal}>&times;</p>
              </div>
              <p className={styles.bottom}>
                This item has been successfully added to your shopping bag
            </p>

            </div>
            <div className={styles.body}>
              <div className={styles.bodyleft}>
                <img src={this.props.image} alt="" />
              </div>
              <div className={styles.bodyright}>
                <h6>{this.props.name}</h6>
                <div>
                  <div className={styles.widget}>
                    <span onClick={this.handleDecrease}>-</span>
                    <p>{this.state.quantity}</p>
                    <span onClick={this.handleIncrease}>+</span>
                  </div>
                  <p>&times; &#8358; {this.state.amount}</p>
                </div>
              </div>
            </div>
            <div className={styles.subtotal}>
              <h4>SUBTOTAL</h4>
              <p>&#8358; {this.state.subtotal}</p>
            </div>
            <div className={styles.total}>
              <h4>TOTAL</h4>
              <p>&#8358; {this.state.subtotal}</p>
            </div>
            <button onClick={this.handleItem}>
              CONTINUE TO CHECKOUT
            </button>
          </div>
        </Slide>
      </div >
    ) : null;

    return (
      <div className={styles.Product}>
        <Link to="/shop"><span>&#8592;</span> Go Back</Link>
        <div>
          <div className={styles.left}>
            <img src={this.props.image} alt="" />
          </div>
          <div className={styles.right}>
            <h2>{this.props.name}</h2>
            <p>{this.props.description}</p>
            <div>
              <p>&#8358; {this.props.amount}</p>
              <button onClick={this.handleCheckOutModal}>
                <span><img src={shopIcon} alt="" /></span>
                <span>ADD TO CART</span>
              </button>
            </div>
          </div>
        </div>
        {checkoutModal}
      </div>
    )
  }
}
