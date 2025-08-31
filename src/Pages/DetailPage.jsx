import React, { useState , useEffect } from 'react'
import { Link, useParams ,useSearchParams } from 'react-router-dom'
import { useProductDetails, useProducts } from '../Context/ProductContext'
import Loader from '../Components/Loader';
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetags } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import styled from 'styled-components';


const Container=styled.div`
  display: flex;
  align-items: flex-start;
  min-height: 1000px;
  width: 100%;
  & img{
    width: 300px;
    padding: 15px 25px;
    background-color: #fff;
    border: 2px dashed #fe5d42;
    border-radius: 50px;
    margin: 10px;
    margin-right: 50px;
  }
`

const Information=styled.div`
  width: 100%;
  border: 2px dashed #e2e2e2;
  margin: 10px;
  padding: 25px;
  border-radius: 50px;

  & h3 {
    color: #fe5d42;
    font-size: 1.5rem;
    margin-bottom: 40px;
  }

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & a {
    display: flex;
    align-items: center;
    text-decoration: none;
    background-color: #fe5d42;
    color: #fff;
    border-radius: 12px;
    padding: 5px 10px;
  }

  & a svg {
    margin-right: 10px;
  }
`



const Title=styled.h3`
  
`
const Description=styled.p`
  color: grey;
  width: 500px;
  font-size: 1.1rem;
  margin-bottom: 40px;

`
const Category=styled.p`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  & svg {
    color: #fe5d42;
    margin-right: 10px;
  }
`

const Price=styled.span`
  display: flex;
  align-items: center;
  & svg {
    color: #fe5d42;
    margin-right: 5px;
  }
`


function DetailPage() {
  const {id}=useParams();
  const {products}=useProducts();
  const productDetails=useProductDetails(+id);


  useEffect(() => {
    if (!productDetails) {
    return <Loader/>
    }
  }, [id, products]);


  return (
   <>
   <Container>
    <img src={productDetails.image} alt={productDetails.title} style={{width:'300px'}}/>
    <Information>
      <Title>{productDetails.title}</Title>
      <Description>{productDetails.description}</Description>

      <Category>
        <SiOpenproject />
        {productDetails.category}
        </Category>

      <div>
        <Price>
          <IoMdPricetags/>
          {productDetails.price} $
          </Price>
       <Link to='/products'>
       <FaArrowLeft/>
      <span> Back to shop</span>
       </Link>
      </div>
    </Information>
    </Container>
   </>
  )
}

export default DetailPage