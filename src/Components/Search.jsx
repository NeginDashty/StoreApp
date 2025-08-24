import React from 'react'
import { ImSearch } from "react-icons/im";
import {CreateQueryObject} from '../helper/Helper';
import styled from 'styled-components';


const SearchContainer=styled.div`
  margin: 0 10px 50px;
  & input{
    border: 2px dashed #fe5d42;
    padding: 10px;
    width: 250px;
    font-size: 0.9rem;
    color: #fe5d42;
    border-radius: 10px;
    margin-right: 10px;
  }& button{
    padding: 10px;
    font-size: 1rem;
    background-color: #fe5d42;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`
function Search({search,setSearch,setQuery}) {
    const searchHandler=()=>{
        //یعنی مقدار داخل اینپوت سرچ میره تو آبجکت کوئری
        setQuery((query)=>CreateQueryObject(query,{search}));
        //الان سرچ رفت داخل کوئری
      }
  return (
   <>
    <SearchContainer>
           <input type="text" placeholder='Search...' value={search} onChange={e=>setSearch(e.target.value.toLowerCase().trim())}/>
           <button onClick={searchHandler}>
             <ImSearch/>
           </button>
       </SearchContainer>
   </>
  )
}

export default Search