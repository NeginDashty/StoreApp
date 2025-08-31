import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useContext ,createContext } from 'react'
import api from '../services/Config';



const productContext=createContext();


export function ProductsProvider({children}) {
  
  const [products,setProducts]=useState([]);

  useEffect(()=>{
    const fetchProducts=async()=>{
       try {
        const response=await api.get('/products');
        setProducts(response);
        //الان پروداکت رو گرفتیم و ریختیم توی استیت و داریمش
       } catch (error) {
        console.log(error);
       }
    };
    fetchProducts();
  },[])

  return (
    <productContext.Provider value={{products,setProducts}}>
        {children}
    </productContext.Provider>
  )
}



export const useProducts=()=>{
    return useContext(productContext);
};

export const useProductDetails=(id)=>{
  const {products}=useContext(productContext);
  const result=products.find(item=>item.id===id);
  return result;
}
