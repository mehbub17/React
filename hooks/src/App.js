import logo from './logo.svg';
import './App.css';
import StateTut from './components/useState/StateTut';
import React,{ useState } from 'react';

function App() {

  const [state,setState] = useState(true);

  const toggle = ()=>{
    setState(state => !state);
  }

  return (
    <div className="App">

    

    {state ? <StateTut/>:""}
    <button onClick={toggle}>Toggle Counter</button>
    </div>
  );
}

export default App;
