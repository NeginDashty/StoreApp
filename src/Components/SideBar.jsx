import React from 'react'
import { FaListUl } from "react-icons/fa";
import {CreateQueryObject} from '../helper/Helper';
import styled from 'styled-components';
import categories from '../Constants/List';


const SideBarContainer=styled.div`
width: 200px;
height: fit-content;
margin: 10px;
padding: 20px;
margin-left: 30px;
background-color: #fff;
border: 2px dashed #e2e2e2;
border-radius: 20px;
 & div{
width: 200px;
display: flex;
align-items:center ;
margin-bottom: 10px;
color: #fe5d42;
font-weight: 500;
margin-left: 29px;
}& p{
  margin-left: 10px;
}& li{
  list-style: none;
  padding: 5px;
  cursor: pointer;
}& li:hover{
color: #fe5d42;
}
`;

const Selected=styled.li`

  ${props=>props.active?
 `background-color: #f7753d49;
  color: #fe5d42;
  border-radius: 10px;`:
 `background-color: transparent;
  color: inherit;`
  }
`

function SideBar({query,setQuery}) {
    const categoryHandler=(event)=>{ 
        const {tagName}=event.target;
        const category=event.target.innerText.toLowerCase();
        
        if(tagName!== 'LI') return;
        setQuery((query)=>CreateQueryObject(query,{category}))
        console.log(category);
      }
  return (
   <>
    <SideBarContainer>
           <div>
             <FaListUl/>
             <p>Categories</p>
           </div>
           <ul onClick={categoryHandler}>
             {categories.map((c)=>
             <Selected key={c.id} active={query.category===c.type.toLowerCase()}>
              {c.type}
              </Selected>
            )}
           </ul>
         </SideBarContainer>
   </>
  )
}

export default SideBar