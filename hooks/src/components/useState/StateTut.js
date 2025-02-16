import React from 'react';
import {useState} from 'react';

function StateTut() {

  const[inputVal,setInputVal] = useState("Mehbub");

  console.log(inputVal);

  const onChange = (event)=>{

   const newVal =  event.target.value;
   setInputVal(newVal);
  }


  return (
    <div>

      <h1>{inputVal}</h1>
        
        <input type="text" value={inputVal}  placeholder='type anything' onChange={onChange}></input>

    </div>
  )
}

export default StateTut;