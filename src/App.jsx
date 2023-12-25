import React, { useEffect, useState } from "react";
import { Background } from "./components/Background";
import Foreground from "./components/Foreground";
import Form from "./components/Form";

const App = () => {
  const[ toAppear,setToAppear] = useState(false);
  const [data,setData]= useState([]);


  const handle = () => {
    setToAppear(!toAppear);
  }
  useEffect(()=>{
     handle
  },[]);
  
  
  const submitHandler = (incomingData) => {
    setData((prevData) => [...prevData, incomingData]);
  };
  useEffect(()=>{
    submitHandler
  },[]);


  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-zinc-800">
      <Background />
      {toAppear && <Form func={handle} sub={submitHandler} aaa={data} />}
      <Foreground con={data} />
      <button type="button" className="absolute top-0 z-[3] right-0 text-black bg-sky-600 rounded-md" onClick={handle}>Insert a card</button>
    </div>
  )
};

export default App;
