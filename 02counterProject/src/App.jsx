import { useState } from 'react'  // react hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(5) // var,method

  let [color,setColor] = useState('red')

  //let counter = 5

  const addValue =()=>{
    // counter++;

    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1) /// only one runs  like this same state  update smae state that was called


    console.log('clicked',counter);
  }

  const decrementCounter = ()=>
  {
    setCounter((prevCount) => prevCount-1)
    setCounter((prevCount) => prevCount-1)
    setCounter((prevCount) => prevCount-1)
    // here is not bunch of statement but previous state catching
  }

  return (
    <>
     <h1>React Counter</h1>
     
     <h2 >counter val : {counter}</h2>
     <button
     onClick={addValue}
     >Add Value {counter}</button>
     <br/>
     <button
     onClick={decrementCounter}
     >Remove Value {counter}</button>

     <footer>
      
     </footer>
    </>
  )
}

export default App
