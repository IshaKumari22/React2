import React from 'react';
import "./Home.css"
import {Link}from "react-router-dom";
import { useRecoilState } from 'recoil';
import CountValueAtom from '../recoil/CountValueAtom';


const Home = () => {
    const [countValue, setcountValue] = useRecoilState(CountValueAtom);

  return (
    <div>
        <h1>Home</h1>

        <div>
            <h1>Current  count Value is:{countValue}</h1>
        </div>
        <div className='link-wrapper'>
            <div>
            <Link to="/counter">
                <div>Counter</div>
            </Link>
            </div>
            
            <div>
            <Link to="/shopping">
                <div>Shopping</div>
            </Link>
            </div>
            
    </div>
    </div>
  )
}

export default Home