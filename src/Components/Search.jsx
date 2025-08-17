import React from 'react'
import { ImSearch } from "react-icons/im";
import {CreateQueryObject} from '../helper/Helper';


function Search({search,setSearch,setQuery}) {
    const searchHandler=()=>{
        //یعنی مقدار داخل اینپوت سرچ میره تو آبجکت کوئری
        setQuery((query)=>CreateQueryObject(query,{search}));
        //الان سرچ رفت داخل کوئری
      }
  return (
   <>
    <div>
           <input type="text" placeholder='Search...' value={search} onChange={e=>setSearch(e.target.value.toLowerCase().trim())}/>
           <button onClick={searchHandler}>
             <ImSearch/>
           </button>
       </div>
   </>
  )
}

export default Search