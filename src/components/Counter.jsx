import React ,{ useEffect }  from 'react'
import{useState} from 'react';
import "./counter.css"
const Counter = () => {
    const [countValue, setcountValue] = useState(0);

    useEffect(() => {
        console.log("hello");
      },[]);
      

  return (
    <div>
        <h2>Counter</h2>
      <h1>{countValue}</h1>
    
      <div className="btn-group">
        <button onClick={()=>setcountValue(countValue + 1)}>
          increment
          </button> 
        <button onClick={()=>setcountValue(countValue - 1)}>
          decrement
          </button>
        </div>
      </div>
  )
}

export default Counter