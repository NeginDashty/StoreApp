import React, {  createContext, useContext } from 'react'
import { useReducer } from 'react'
import { SumProducts } from '../helper/Helper';


const CartContext=createContext();
const initialState={
  selectedItems:[],
  itemCounter:0,
  totalPrice:0,
  //payed yet? 
  checkOut:false,

}


function reducer(state, action) {
  switch (action.type) {
    case 'add_item':
      if (!state.selectedItems.find(i => i.id === action.payload.id)) {
        // محصول تازه → فقط اضافه کن (بدون SumProducts)
        return {
          ...state,
          selectedItems: [...state.selectedItems, { ...action.payload, quantity: 1 }],
          checkOut: false
        };
      } else {
        // محصول از قبل هست → موجودی رو زیاد کن + SumProducts
        const updatedItems = state.selectedItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          selectedItems: updatedItems,
          ...SumProducts(updatedItems),  // ✅ فقط اینجا
          checkOut: false
        };
      }

    default:
      throw new Error('Invalid Action!');
  }
}


export function CartProvider({children}) {

  const [state,dispatch]=useReducer(reducer,initialState);
  return (
   <>
   <CartContext.Provider value={{state,dispatch}}>
    {children}
   </CartContext.Provider>
   </>
  )
};

export function useCart(){
  return useContext(CartContext);
};


