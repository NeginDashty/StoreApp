import React from 'react'
import { useProducts } from '../Context/ProductContext'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { ShortenText} from '../helper/Helper';
import styled from 'styled-components'
import { useCart } from '../Context/CartContext';
import { MdDeleteOutline } from "react-icons/md";



const Cards=styled.div`
    width: 270px;
    margin: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    background-color: #fff;
    border: 2px dashed #e2e2e2;
    border-radius: 20px;
    & img{
        width: 230px !important;
        height: 230px;
        padding: 20px;
        margin-bottom: 20px;
        background-color: #fff;
    }
    & h3{
        color: #fe5d42;
        font-size: 1.1rem;
    }& p{
        color: #666;
        font-size: 0.9rem;
        font-weight: 600;
        margin: 10px 0 30px;
    }
`;

const Actions=styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & button{
        background-color: #fe5d42;
        color: #fff;
        border: none;
        font-size: 1.7rem;
        width: 32px;
        height: 32px;
        line-height: 32px;
        padding: 2px;
        border-radius: 8px;
        cursor: pointer;
    }& div{
        display: flex;
        align-items: center;
    }& div span{
        width: 20px;
        text-align: center;
        margin: 0 10px;
    }

`



function Card({data}) {
     const{id,title,image,price,}=data;
     const {state,dispatch}=useCart();
     const clickHandler=(type)=>{
        dispatch({type:type,payload:data});
        console.log(state);
     };
     

  return (
    <>

    <Cards>
        <img src={image} alt="title"/>
        <h3>{ShortenText(title)}</h3>
        <p>{price} $</p>
        <Actions>
            <Link to={`/products/${id}`}>
            <TbListDetails/>
            </Link>

            <div>
                <button onClick={()=>clickHandler('add_item')}>
                <TbShoppingBagCheck/>
            </button>
            <button onClick={()=>clickHandler('remove_item')}>
                <MdDeleteOutline />
            </button>
            <button onClick={()=>clickHandler('increase')}>
                 +
            </button>
            <button onClick={()=>clickHandler('decrease')}>
                -
            </button>
            </div>
        </Actions>
    </Cards>
    </>
    )
}

export default Card