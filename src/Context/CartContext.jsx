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
    case 'remove_item':
      const newItems= state.selectedItems.filter((i) => i.id !== action.payload.id);
      return {
        ...state,
        selectedItems: newItems,
        ...SumProducts(newItems),
      };
    case 'increase':
      const increasedItems=state.selectedItems.findIndex(item=>item.id===action.payload.id);
      const updatedItems=[...state.selectedItems];
      // state.selectedItems[increasedItems].quantity++;
      if(increasedItems>=0){
       updatedItems[increasedItems]={
        ...updatedItems[increasedItems],
        quantity:updatedItems[increasedItems].quantity+1
       }
       return{
        ...state,
        selectedItems:updatedItems,
        ...SumProducts(updatedItems)

       }
      }
    case 'decrease':  
     const decreasedItems=state.selectedItems.findIndex((item)=>item.id===action.payload.id);
     const updatedDecreasedItems=[...state.selectedItems];

     if(decreasedItems>=0){
      updatedDecreasedItems[decreasedItems]={
        ...updatedDecreasedItems[decreasedItems],
        quantity:updatedDecreasedItems[decreasedItems].quantity-1

      }
      return{
        ...state,
        selectedItems:updatedDecreasedItems,
        ...SumProducts(updatedDecreasedItems)
      }
     }
     //تسویه
    case 'checkout':
            return{
              selectedItems:[],
              itemCounter:0,
              totalPrice:0,
              checkOut:true
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


