import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    const { productList, addToShoppingList } = this.props;

    return (
      <div className="row">
        {productList.map((shoes, index) => {
          return (
            <ProductItem
              key={index}
              shoes={shoes}
              addToShoppingList={addToShoppingList}
            />
          );
        })}
      </div>
    );
  }
}
