import React, { useEffect } from "react";
import { useState } from "react";

function StateTut() {
  const [inputVal, setInputVal] = useState("Mehbub");

  // console.log(inputVal);

  const onChange = (event) => {
    const newVal = event.target.value;
    setInputVal(newVal);
  };

  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count=>count+1);
  };
  const dec = () => {
    setCount(count=>count-1);
  };


  useEffect(()=>{

    console.log("Counter Mounted");

    return function()
    {
      console.log("unmounted");
    };

  },[]); // on_mounting

  useEffect(()=>{

    console.log("Counter Updated");

  },[count]); // when count or dependency arry value changes the use effect will run

  useEffect(()=>{

    console.log("Input Updated");

  },[inputVal]);

  return (
    <div>
      <h1>{inputVal}</h1>

      <input
        type="text"
        value={inputVal}
        placeholder="type anything"
        onChange={onChange}
      ></input>

      <h1>Counter : {count}</h1>
      <button onClick={inc}>Up</button>
      <button onClick={dec}>Down</button>
    </div>
  );
}

export default StateTut;
