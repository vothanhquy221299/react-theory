import * as shoesShopConstants from '../constants/shoesShopConstants'

const initialState = {
    shoppingList: [
    ],
};

const shoesShopReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case shoesShopConstants.ADD_TO_SHOPPING_LIST: {

            //copy a new arr to handle
            const shoppingListUpdate = [...state.shoppingList];

            //bo sung thuoc tinh quantity
            const newShoes = {
                ...payload,
                quantity: 1
            };

            //Kiem tra sp da ton tai
            const index = shoppingListUpdate.findIndex(item => item.id === payload.id);
            if (index === -1) {
                //Chua ton tai trong mang
                shoppingListUpdate.push(newShoes);
            } else {
                //da ton tai
                shoppingListUpdate[index].quantity += 1;
            }
            //Tra ve state moi

            return { ...state, shoppingList: shoppingListUpdate };
        }
        case shoesShopConstants.UPDATE_QUANTITY: {
            const { id, type } = payload;
            const shoppingListUpdate = [...state.shoppingList];

            //Tim vi tri phan tu can cap nhat so luong
            const idx = shoppingListUpdate.findIndex(item => item.id === id);

            if (type) {
                shoppingListUpdate[idx].quantity += 1;
            } else {
                if (shoppingListUpdate[idx].quantity > 1) {
                    shoppingListUpdate[idx].quantity -= 1;
                }
            }
            //tra ve state moi   
            return { ...state, shoppingList: shoppingListUpdate };
        }
        case shoesShopConstants.REMOVE_FROM_SHOPPING_LIST: {
            const shoppingListUpdate = [...state.shoppingList];

            //Tim vi tri san pham can xoa
            const idx = shoppingListUpdate.findIndex(item => item.id == payload);
            //Xoa 1 phan tu tai vi tri idx
            shoppingListUpdate.splice(idx, 1);
            //Tra ve state moi
            return { ...state, shoppingList: shoppingListUpdate };
        }

        default:
            return state;
    }
};

export default shoesShopReducer;