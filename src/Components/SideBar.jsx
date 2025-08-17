import React from 'react'
import { FaListUl } from "react-icons/fa";
import {CreateQueryObject} from '../helper/Helper';

function SideBar({setQuery}) {
    const categoryHandler=(event)=>{ 
        const {tagName}=event.target;
        
        const category=event.target.innerText.toLowerCase();
        
        if(tagName!== 'LI') return;
        setQuery((query)=>CreateQueryObject(query,{category}))
        console.log(category);
      }
  return (
   <>
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
   </>
  )
}

export default SideBar