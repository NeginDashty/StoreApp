import React, { useEffect } from 'react'
import { useCart } from '../Context/CartContext'
import { useProducts } from '../Context/ProductContext';
import BasketCard from '../Components/BasketCard';
import { Link } from 'react-router-dom'



function CheckOutPage() {
const {state,dispatch}=useCart();
const {products}=useProducts();


  if(!state.itemCounter){
    return(
      <>
      <div>
        <p>Empty!</p>
      </div>
      </>
    )
  }


  return (
    <>
    <div>
      <div>
        {state.selectedItems.map((product)=>(
          <BasketCard
          key={product.id}
          data={product}
          itemcounter={product.itemCounter}/>
        ))}
      </div>
      <div>
        <Link to='/products'>
        <button>Back</button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default CheckOutPage