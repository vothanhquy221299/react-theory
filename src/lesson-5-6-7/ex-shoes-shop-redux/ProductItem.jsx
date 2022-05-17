import React, { Component } from "react";
import {connect} from 'react-redux';
import {actAddToShoppingList} from '../../store/actions/shoesShopActions'

class ProductItem extends Component {
  render() {
      const {shoes,  addToShoppingList} = this.props;
    return (
      <div className="col-4" style={{paddingBottom: '30px'}}>
        <div className="card">
          <img className="card-img-top" src={shoes.image}/>
          <div className="card-body">
            <h4 className="card-title">{shoes.name}</h4>
            <p className="card-text">{shoes.price}$</p>
            <button className="btn btn-dark" onClick={() =>addToShoppingList(shoes)}>Add to cart</button>
          </div>
        </div>
      </div>
    );
  }
}

//Tao ra cac function de dispatch action, cac function nay se duoc map thanh props component
const mapDispatchToProps = dispatch=>({
    addToShoppingList: shoes =>{
      //Khoi tao action gom type(de reducer nhan dien action va data gui len cho reducer)
      //dispatch action len reducer
      dispatch(actAddToShoppingList(shoes));
    },
  });

export default connect(null, mapDispatchToProps)(ProductItem);