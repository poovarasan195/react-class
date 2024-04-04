// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layoutes from './components/Layoutes.jsx'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Context from './components/context.jsx'
import User from './components/User.jsx'
import Github from './components/github.jsx'


const router = createBrowserRouter(
   createRoutesFromElements(
       <Route path='/' element={<Layoutes />}>
             <Route path='/' element={<Home />} />
             <Route path='/about' element={<About />} />
             <Route path='/context' element={<Context />} />
             <Route path='/user' element={<User />} >
                 <Route path=':username'element={<User />} />
             </Route>
             <Route path='/github' element={<Github />} />
       </Route>
   )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
 <RouterProvider router={router} />
  </>
)
