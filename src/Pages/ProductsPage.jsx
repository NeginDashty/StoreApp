import React, { useEffect, useState } from 'react'
import { useProducts } from '../Context/ProductContext';
import styled from 'styled-components';
import Card from '../Components/Card';
import Loader from '../Components/Loader';
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
import { CreateQueryObject, FilterProducts, SearchProducts } from '../helper/Helper';
import { useSearchParams } from 'react-router-dom';


const Container=styled.div`
display: flex;
justify-content: space-between;
`


const Products=styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`


function ProductsPage() {
  const {products}=useProducts();
  const [dispalyed,setDisplayed]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState({});
  const [searchParams,setSearchParams]=useSearchParams();

  useEffect(()=>{
    setDisplayed(products);
  },[products]);

  useEffect(()=>{
    setSearchParams(query);
   let finalProducts=SearchProducts(products,query.search);
   finalProducts=FilterProducts(finalProducts,query.category)
   setDisplayed(finalProducts);
   console.log(finalProducts);
   
  },[query]);

  const searchHandler=()=>{
    //یعنی مقدار داخل اینپوت سرچ میره تو آبجکت کوئری
    setQuery((query)=>CreateQueryObject(query,{search}));
    //الان سرچ رفت داخل کوئری
    console.log(query);
  }

  const categoryHandler=(event)=>{ 
    const {tagName}=event.target;
    
    const category=event.target.innerText.toLowerCase();
    
    if(tagName!== 'LI') return;
    setQuery((query)=>CreateQueryObject(query,{category}))
    console.log(query);
    console.log(category);
  }
  return (
   <>
    <div>
        <input type="text" placeholder='Search...' value={search} onChange={e=>setSearch(e.target.value.toLowerCase().trim())}/>
        <button onClick={searchHandler}>
          <ImSearch/>
        </button>
    </div>
    
   <Container>
    <Products>
      {!dispalyed.length && <Loader/>}
      {dispalyed.map((product)=>{
        return <Card key={product.id} data={product}/>
      })}
    </Products>
      <div>
        <div>
          <FaListUl/>
          <p>Categories</p>
        </div>
        <ul onClick={categoryHandler}>
          <li>All</li>
          <li>Electronics</li>
          <li>Jewelery</li>
          <li>Men's clothing</li>
          <li>Women's clothing</li>
        </ul>
      </div>
   </Container>
   </>
  )
}

export default ProductsPage; 