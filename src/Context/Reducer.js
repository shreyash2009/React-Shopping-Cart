export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.payload,
            qty: 1,
          },
        ],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload),
      };
   
    case "INCREMENT_QTY":
      let tempCart = state.cart.map((c)=>{
        if(c.id === action.payload){
          return{...c, qty: c.qty+1}
        }
        return c
      })
      return {...state, cart: tempCart}

      case "DECREMENT_QTY":
        let newCart = state.cart.map((item)=>{
          if(item.id === action.payload){
            return{...item, qty: item.qty ? item.qty -1 : item.qty}
          }
          return item
        })
        .filter((i)=>i.qty !==0)
        return {...state, cart: newCart}

        

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
  }
};
