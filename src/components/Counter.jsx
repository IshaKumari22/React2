import React  from 'react'
import{useState} from 'react';
import "./counter.css"
import { useRecoilState } from 'recoil';
import CountValueAtom from '../recoil/CountValueAtom';

const Counter = () => {

  const [countValue, setCountValue] = useRecoilState(CountValueAtom);


  return (
    <div>
        <h2>Counter</h2>
      <h1>{countValue}</h1>
    
      <div className="btn-group">
        <button onClick={()=>setCountValue(countValue + 1)}>Increment</button> 
        <button onClick={()=>setCountValue(countValue - 1)}>Decrement</button>
        </div>
      </div>
  )
}

export default Counter