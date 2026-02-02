import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import {jsx as _jsx} from 'react/jsx-runtime'



function MyApp(){
  return(
    <h1> Custom React App</h1>
  )
}

const ReactElement ={
  type : 'a',
  props:{
    href:"www.google.com",
    target:"_blank",
  },
  children:"Click me to visit google"
}

const anotherElement = (
  <a href="www.google.com" target="_blank">Click me to visit google another</a>
)

const extra = "i AM another User"
const reactElementVite = React.createElement(
  'a',
  {href:"https://www.google.com",target:"_blank"},
  'Click me to visit google',extra

)





createRoot(document.getElementById('root')).render(
    
   <>
    { reactElementVite }
    <App />

  
</>
)
