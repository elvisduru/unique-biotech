import React, { Component } from "react";
import styles from "./Products.module.css";
import ProductList from "./ProductList/ProductList";
import progOil from "../../../images/progoil.jpg";
import progSoil from "../../../images/progsoil.jpg";
import progMeal from "../../../images/progmeal.jpg";
// import progLarvae from '../../../images/slide08.jpg';
import progLarvae from "../../../images/larvae.png";

export default class Products extends Component {
  render() {
    const products = [
      { name: "Proganics Larvae", image: progLarvae, url: "/larvae" },
      { name: "Proganics Meal", image: progMeal, url: "/meal" },
      { name: "Proganics Oil", image: progOil, url: "/oil" },
      { name: "Proganics Soil", image: progSoil, url: "/soil" },
    ];
    return (
      <div className={styles.Products}>
        <h1>Welcome to our online store</h1>
        <h2>Showing all results</h2>
        <ProductList products={products} />
      </div>
    );
  }
}
