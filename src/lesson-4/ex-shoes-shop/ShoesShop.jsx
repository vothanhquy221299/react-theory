import React, { Component } from 'react'
import ProductList from './ProductList'
import ShoppingList from './ShoppingList'
import productList from './data.json'

export default class ShoesShop extends Component {
    state ={
        shoppingList: []
    };

    addToShoppingList = (shoes) => {
        //copy a new arr to handle
        const shoppingListUpdate = [...this.state.shoppingList];

        const newShoes = {
            ...shoes, 
            quantity: 1
        };

        //Kiem tra sp da ton tai
        const index = shoppingListUpdate.findIndex(item =>item.id === shoes.id);
        if(index === -1){
            //Chua ton tai trong mang
            shoppingListUpdate.push(newShoes);
        } else {
            //da ton tai
            shoppingListUpdate[index].quantity += 1;
        }
        //Set state to update ui
        this.setState({
            shoppingList: shoppingListUpdate,
        });
    };

    updateQuantity = (id, action) =>{
        //action: true => tang, false => giam
        const shoppingListUpdate = [...this.state.shoppingList];

        //Tim vi tri phan tu can cap nhat so luong
        const idx = shoppingListUpdate.findIndex(item => item.id === id);

        if(action){
            shoppingListUpdate[idx].quantity += 1;
        }else{
            if(shoppingListUpdate[idx].quantity >1){
                shoppingListUpdate[idx].quantity -= 1;
            }
        }
        //cap nhat state
        this.setState({
            shoppingList: shoppingListUpdate,
        });
    };

    removeFromShoppingList = id =>{
        const shoppingListUpdate = [...this.state.shoppingList];

        //Tim vi tri san pham can xoa
        const idx = shoppingListUpdate.findIndex(item => item.id ==id);
        //Xoa 1 phan tu tai vi tri idx
        shoppingListUpdate.splice(id, 1);
        //Cap nhat state
        this.setState({
            shoppingList: shoppingListUpdate,
        })
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
                        <button className="btn btn-dark" data-toggle="modal" data-target="#shoppingList">Shopping List ({shoppingList.length})</button>
                    </div>
                </div>
                <ShoppingList shoppingList={shoppingList}
                 updateQuantity={this.updateQuantity}
                 removeFromShoppingList ={this.removeFromShoppingList}/>
                <ProductList productList={productList} addToShoppingList={this.addToShoppingList}/>
            </div>
        )
    }
}
