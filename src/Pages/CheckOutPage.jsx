import React, { useEffect } from 'react'
import { useCart } from '../Context/CartContext'
import { useProducts } from '../Context/ProductContext';
import BasketCard from '../Components/BasketCard';
import { Link } from 'react-router-dom'
import BasketSidebar from '../Components/BasketSidebar';
import styled from 'styled-components';

const Container=styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
padding: 10px;
min-height: 1000px;
`

const Products=styled.div`
width: 100%;
`





function CheckOutPage() {
const {state,dispatch}=useCart();
const {products}=useProducts();


  if(!state.itemCounter){
    return(
      <>
      <Container>
        <p>Empty!</p>
      </Container>
      </>
    )
  }


  return (
    <>
    <Container>
      <BasketSidebar state={state}/>
      <Products>
        {state.selectedItems.map((product)=>(
          <BasketCard
          key={product.id}
          data={product}
          itemcounter={product.itemCounter}/>
        ))}
      </Products>
      <div>
        <Link to='/products'>
        <button>Back</button>
        </Link>
      </div>
    </Container>
    </>
  )
}

export default CheckOutPage