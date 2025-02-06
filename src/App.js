
import Counter from "./components/Counter";
import SampleConmponent from "./components/SampleConmponent";
import Shopping from "./components/Shopping";
import { useState } from "react";
import { BrowserRouter,Routes,Route } from 'react-router';
import Home from "./components/Home"

function App() {
  
  const[sampleData,setSampleData]=useState(52);
  return (
    <div className="main-wrapper">

      {/* <Counter/> */}
      {/* <Shopping/> */}
      {/* <h1>Sample Data value is:{sampleData}</h1>
     <SampleConmponent data={sampleData}/> */}
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/shopping" element={<Shopping/>}/>

     </Routes>
    </div>
  );
}

export default App;
