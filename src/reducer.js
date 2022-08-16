export const initialState1 = {
    cart: [{
        id:1,
        title:"Bhagavad Gita Original in English - Bhagavad Gita as It is Original in English Hardcover – 1 January 2020",
        price:267,
        rating:5,
        image:"https://images-na.ssl-images-amazon.com/images/I/518aPMbn8uL._SX292_BO1,204,203,200_.jpg",
},{
    id:2,
                title:"Bajaj Rex 500W Mixer Grinder with Nutri-Pro Feature, 3 Jars, White",
                price:2249,
                rating:5,
                image:"https://m.media-amazon.com/images/I/51Ck4wmBbSL._SX679_.jpg",

}
],
    user:null,
};
export const getCartTotal = (cart) => {
    return( cart?.reduce((amount,item)=>item.price + amount ,0))
  ;
}
const reducer1 = (state, action) => {
    console.log(action.id)
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item]
            };

        case 'REMOVE_FROM_CART':
            let newCart = [...state.cart];
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            if (index >= 0) {
                newCart.splice(index, 1);
            }
            else {
                console.log("Error while deleting")
            }
            return { ...state, cart: newCart, };

        default:
            return state;

    }
}

export default reducer1;