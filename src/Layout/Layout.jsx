import React from 'react'
import { Link } from 'react-router-dom'
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useCart } from '../Context/CartContext';
import styled from 'styled-components';


const Header=styled.header`
display: flex;
align-items: center;
justify-content: space-between;
background-color: #fe5d42;
padding:20px 20px;
color: #fff;
margin-bottom:60px;
border-radius: 10px;
position: sticky;
& a{
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
}& div{
  font-size: 1.6rem;
  background-color: #fff;
  text-align: center;
  color: #fe5d42;
  height: 35px;
  width: 35px;
  border-radius: 9px;
  padding: 4px 2px;
  position: relative;

}& span{
  font-size: 0.9rem;
  width: 20px;
  height: 20px;
  line-height: 20px;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  position: absolute;
  text-align: center;
  /* top: -10px;
  right: -10px; */
  
}
`
const Footer=styled.footer`
background-color: #fe5d42;
padding:10px 20px;
color: #fff;
text-align: center;
border-radius: 9px;
margin-top: 80px;
margin: 10px;
`

function Layout({children}) {
 const {state}=useCart();
  return (
   <>
   <Header>
    <Link to='/products'>Products</Link>

       <Link to='/checkout'>
       <div>
    <PiShoppingCartSimpleBold />
    {!!state.itemCounter && <span>{state.itemCounter}</span>}
    </div>
    </Link>
   
   
   
   </Header>
   {children}
   <Footer>
    <p>Developed by Negin ❤️</p>
   </Footer>
   </>
  )
}

export default Layout;