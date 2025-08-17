import React, { useEffect, useState } from 'react'
import { useProducts } from '../Context/ProductContext';
import styled from 'styled-components';
import Card from '../Components/Card';
import Loader from '../Components/Loader';
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
import { CreateQueryObject, FilterProducts, getInitialQuery, SearchProducts } from '../helper/Helper';
import { useSearchParams } from 'react-router-dom';
import Search from '../Components/Search';
import SideBar from '../Components/SideBar';


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
    setQuery(getInitialQuery(searchParams));
  },[products]);


  useEffect(()=>{
    //1
    setSearchParams(query); 
    setSearch(query.search || "");
   let finalProducts=SearchProducts(products,query.search);
   finalProducts=FilterProducts(finalProducts,query.category)
   setDisplayed(finalProducts);
   console.log(finalProducts);
   
  },[query]);


  return (
   <>
   <Search search={search} setSearch={setSearch} setQuery={setQuery}/>

    
   <Container>
    <Products>
      {!dispalyed.length && <Loader/>}
      {dispalyed.map((product)=>{
        return <Card key={product.id} data={product}/>
      })}
    </Products>
      <SideBar setQuery={setQuery}/>
   </Container>
   </>
  )
}

export default ProductsPage; 