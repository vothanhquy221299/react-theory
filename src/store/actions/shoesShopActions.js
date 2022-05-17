// const actAddToShoppingList = shoes =>{
//     return {
//         type: 'ADD_TO_SHOPPING_LIST',
//         payload: shoes, 
//     }
// }

//cach viet return truc tiep ve obj
import * as shoesShopConstants from '../../store/constants/shoesShopConstants'
// import { ADD_TO_SHOPPING_LIST, UPDATE_QUANTITY, REMOVE_FROM_SHOPPING_LIST } from '../../store/constants/shoesShopConstants';

export const actAddToShoppingList = shoes => ({
    type: shoesShopConstants.ADD_TO_SHOPPING_LIST,
    payload: shoes,
});

export const actUpdateQuantity = (id, type) => ({
    type: shoesShopConstants.UPDATE_QUANTITY,
    payload: { id, type },
});

export const actRemoveFromShoppingList = id => ({
    type: shoesShopConstants.REMOVE_FROM_SHOPPING_LIST,
    payload: id,
});

