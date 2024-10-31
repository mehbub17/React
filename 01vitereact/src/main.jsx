import React from 'react'
import ReactDom from 'react-dom/client'

import App from './App.jsx'

function MyApp()
{
  return(
    <div>
      <h1>this too works</h1>
    </div>
  )
}


const anotherElement = (
  <a href='https://google.com' target='_blank'>google</a>
)

//syntax for react element 

const another_user = "Shamim"

const reactElement = React.createElement(
  'a',
  {
    href:"https://google.com",
    target:'_blank'

  },
  'click me to visit google',
  another_user, // evaluated expression
  anotherElement
)


ReactDom.createRoot(document.getElementById('root')).render(
  
    // <App />
    // <MyApp />
    // anotherElement
    // reactElement


    // <App />
    reactElement
     
)
