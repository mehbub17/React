import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Layout from './Layout'
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


// const router = createBrowserRouter([
//   {path: '/',
//     element :<Layout  />,
//     children:[
//       {path:"",
//         element: <Home  />
//       },
//       {
//         path:"about",
//         element : <About  />
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       }
//     ]
//   }
// ])




const router = createBrowserRouter(
  createRoutesFromElements(
    < Route path='/' element ={<Layout />}>

        <Route path='' element={ <Home />} />
        <Route path='about' element={ <About />} />
        <Route path='contact' element={ <Contact />} />
        <Route path='/user/:id' element={<User  />} />
        <Route 
      // loader does api call even before useEffect and after it puts that in cache

      loader={githubInfoLoader}

        path='/github' 
        element={<Github  />} />


        

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
