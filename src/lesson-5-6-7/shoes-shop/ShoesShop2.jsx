import React, { Component } from "react";
import ProductList from "./ProductList";
import ShoppingList from "./ShoppingList";
import productList from "./data.json";

export default class ShoesShop2 extends Component {
    state = {
      shoppingList: [
        {
          id: 1,
          name: "Adidas Prophere",
          price: 350,
          quantity: 1,
          description:
            "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
        },

      ],
    };
  render() {
      const {shoppingList} = this.state;
    return (
      <div className="container">
        <div className="row my-5">
          <div className="col-7 text-right">
            <h2>Shoes Shop</h2>
          </div>
          <div className="col-5 text-right">
            <button
              className="btn btn-warning"
              data-toggle="modal"
              data-target="#shoppingList"
            >
              Shopping List
            </button>
          </div>
        </div>
        <ShoppingList shoppingList = {shoppingList}/>
        <ProductList productList={productList} />
      </div>
    );
  }
}
