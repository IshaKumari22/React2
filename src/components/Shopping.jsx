import React, { useEffect } from 'react'
import { useState } from 'react';
import "./shopping.css";
// import { useEffect } from 'react'

const Shopping = () => {
  const[apiData,setApiData]=useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((json)=>{console.log(json)
     setApiData(json)});
    },[]);
    
  return (
    <div>
        <h1>Shopping</h1>
        <div>
          {apiData?.map((data,index)=>{
            return(
              <div key={data?.id} className='product-card'>
                <div className="image-wrapper">
                  <img src={data?.image} alt={data?.title} />
              </div>
          </div>
            );
          })}
        </div>
    </div>
  );
}

export default Shopping;