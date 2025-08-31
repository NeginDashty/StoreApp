import React, { useEffect } from 'react'
import { useCart } from '../Context/CartContext'



function CheckOutPage() {
const {state}=useCart();
  return (
    <div>
      {state.itemCounter}
    </div>
  )
}

export default CheckOutPage