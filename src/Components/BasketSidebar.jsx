import React from 'react'
import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";
import { useCart } from '../Context/CartContext';
import styled from 'styled-components';

const SideBar=styled.div`
width: 300px;
margin-right: 30px;
border: 2px dashed #fe5d42;
border-radius: 30px;
padding: 20px;
& div{
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    color: #fe5d42;
}& div svg{
    font-size: 1.3rem;
    margin-right: 5px;
}& div span{
color: #8b8a8a;
margin-left: 10px;
}& button{
    width: 100%;
    margin-top: 40px;
    background-color: #fe5d42;
    color: #fff;
    border: none;
    font-size: 1.1rem;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    }
`





function BasketSidebar({state}) {
  const {dispatch}=useCart();
  const clickHandler=(action,payload)=>( dispatch({type:action,payload}));

  return (
    <>
    <SideBar>
        <div>
            <TbChecklist/>
            <p>Total:</p>
            <span>{state.totalPrice}$</span>
        </div>
        <div>
            <FaHashtag/>
            <p>Quantuty:</p>
            <span>{state.quantity}</span>
        </div>
        <div>
            <BsPatchCheck/>
            <p>Status:</p>
              <span>{!state.checkOut ? "Pending" : "Completed"}</span>
        </div>
        <button onClick={()=>clickHandler('checkout')}>CheckOut</button>
    </SideBar>
    </>
  )
}

export default BasketSidebar