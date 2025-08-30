import React, { useState , useEffect } from 'react'
import { useParams ,useSearchParams } from 'react-router-dom'
import { useProducts } from '../Context/ProductContext'


function DetailPage() {
  const {id}=useParams();
  const {products}=useProducts();
  const [product,setProduct]=useState({});

  console.log(products);


  useEffect(() => {
    if (products.length) {
      const filtered = products.find(item => item.id == id);
      setProduct(filtered);
    }
  }, [id, products]);

  return (
   <>
   <div>
    <h1>{product.title}</h1>
    <img src={product.image} alt={product.title} style={{width:'300px'}}/>
    <p>{product.description}</p>
    <p>Price: {product.price} $</p>
    </div>
   </>
  )
}

export default DetailPage