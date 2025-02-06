import React, { useEffect } from 'react'
import { useState } from 'react';
import "./shopping.css";
import { useRecoilState } from 'recoil';
import CountValueAtom from '../recoil/CountValueAtom';

// import { useEffect } from 'react'

const Shopping = () => {
  const[apiData,setApiData]=useState(null);
  const[searchInput,setSearchInput]=useState("")
  const [countValue, setCountValue] = useRecoilState(CountValueAtom);


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
            <h1>Current  count Value is:{countValue}</h1>
        </div>
        <div className='search-wrapper'>
          <input type="text"  placeholder='Search'  className='search-input' value={searchInput} onChange={(e)=> setSearchInput(e.target.value)}/>
        </div>
        <div className='product-wrapper'>
          {apiData?.filter((filtered_value)=>{
            if(searchInput===" "){
              return filtered_value;
            }else if(filtered_value?.title?.toLowerCase()?.includes(searchInput?.toLowerCase())){
              return filtered_value
            }
          })?.map((data,index)=>{
            return(
              <div key={data?.id} className='product-card'>
                <div>

                <div className="image-wrapper">
                  <img src={data?.image} alt={data?.title} />
              </div>
              <div>
              <h3 className='product-name'>{data?.title}</h3>
                  </div>
              <div className='catprice-wrapper'>
                <p className='product-category'>{data?.category}</p>
                <p className='product-price'>${data?.price}</p>
                </div>
              </div>
          </div>
          
            );
          })}
        </div>
    </div>
  );
}

export default Shopping;