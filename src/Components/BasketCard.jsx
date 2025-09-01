import React from 'react'
import { ShortenText } from '../helper/Helper'
import { MdDeleteOutline } from "react-icons/md";
import { useCart } from '../Context/CartContext';
import styled from 'styled-components';


const Card=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px dashed #e2e2e2;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
  & img{
    width: 50px;
    height: 50px;
  }

`

const Actions=styled.div`
  display: flex;
  align-items: center;
  & span{
    width: 20px;
    align-items: center;
    margin: 1 2px;
  }& button{
    background-color: #fe5d42;
    color: #fff;
    border: none;
    font-size: 1.3rem;
    height: 25px;
    width: 25px;
    line-height: 25px;
    padding: 2px;
    border-radius: 8px;
    cursor: pointer;
  }
`


function BasketCard({ data, itemCounter }) {
  const {state,dispatch}=useCart();
  const {image,title,price,quantity}=data;

  const clickHandler=(action,payload)=>( dispatch({type:action,payload}));

  return (
    <>
      <Card>

        <img src={image} alt={title} />
        <p>{ShortenText(title)}</p>
        <Actions>
          {quantity ===1 &&(
            <button onClick={()=>clickHandler('remove_item',data)}>
              <MdDeleteOutline/>
            </button>
          )}
          {quantity >1 &&(
            <button onClick={()=>clickHandler('decrease',data)}>
              -
            </button>
          )}

          <span>{quantity}</span>
          <button onClick={()=>clickHandler('increase',data)}>+</button>
        </Actions>

      </Card>
    </>
  )
}

export default BasketCard;