import React, { Component } from "react";
import styles from "./Completed.module.css";
import axios from "axios";
import { CSVLink } from "react-csv";
import { format } from "date-fns";

export default class Completed extends Component {
  state = {
    orders: [],
    status: "",
  };

  undoApproveOrder = (id) => {
    axios
      .put(`/api/orders/undoApprove/${id}`)
      .then((response) => {
        this.setState({ status: response.data });
        this.fetchOrders();
      })
      .catch((err) => console.log(err));
  };

  transformOrders = (orders) => {
    return orders.map((order) => {
      let orderClone = Object.assign({}, order);
      delete orderClone._id;
      delete orderClone.approved;
      delete orderClone.declined;
      for (const key in orderClone.customer) {
        if (Object.hasOwnProperty.call(orderClone.customer, key)) {
          const element = orderClone.customer[key];
          orderClone[key] = element;
        }
      }
      delete orderClone.customer;
      orderClone["Items"] = "";
      for (let i = 0; i < orderClone.items.length; i++) {
        const item = orderClone.items[i];
        orderClone[
          "Items"
        ] += `${item.name}${item.quantity} - ₦${item.price}\r\n`;
      }
      delete orderClone.items;
      delete orderClone.__v;
      orderClone.created = format(
        new Date(orderClone.created),
        "MM/dd/yyyy-hh:mm"
      );
      return orderClone;
    });
  };

  fetchOrders = () => {
    axios
      .get("/api/orders/completed")
      .then((response) => {
        const orders = response.data;
        this.setState({ orders });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.fetchOrders();
  }
  render() {
    return (
      <div className={styles.Completed}>
        {this.state.status && (
          <div className={styles.alert}>
            <p>{this.state.status}</p>
            <p onClick={() => this.setState({ status: "" })}>&times;</p>
          </div>
        )}
        <CSVLink
          filename={`Uniquestore - completed orders report(${format(
            new Date(),
            "MM/dd/yyyy-hh:mm"
          )}).csv`}
          data={this.transformOrders(this.state.orders)}
        >
          Export as Excel
        </CSVLink>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Order ID</th>
              <th>Items</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Location</th>
              <th>Post Code</th>
              <th>Total</th>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.length <= 0 && (
              <tr>
                <td colSpan={4}>
                  <p>Loading data..</p>
                </td>
              </tr>
            )}
            {this.state.orders.map((order, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className={styles.orderID}>{order.orderID}</td>
                <td className={styles.items}>
                  {order.items.map((item, index) => (
                    <p key={index}>
                      <span>{item.name}</span>
                      <span>- &#8358;{item.price}</span>
                    </p>
                  ))}
                </td>
                <td className={styles.name}>
                  {order.customer.firstName} {order.customer.lastName}
                </td>
                <td className={styles.mobile}>
                  <p>{order.customer.mobile}</p>{" "}
                  <p>
                    {order.customer.mobile ? order.customer.telephone : null}
                  </p>
                </td>
                <td className={styles.location}>
                  <p>{order.customer.address1}</p>
                  <p>{order.customer.address2}</p>
                </td>
                <td className={styles.postCode}>{order.customer.postCode}</td>
                <td className={styles.total}>&#8358;{order.total}</td>
                <td className={styles.controls}>
                  <button
                    onClick={() => this.undoApproveOrder(order.orderID)}
                    title="Undo Approval"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        fill="orangered"
                        d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
