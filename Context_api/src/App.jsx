import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login.jsx'
import Profile from './Components/Profile.jsx'
import React,{useState} from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Context Api Practice</h1>
      <Profile />
      <Login />
      
    </UserContextProvider>
  )
}

export default App
