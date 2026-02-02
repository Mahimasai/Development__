import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  
  let [counter, HiteshCounter]= useState(15)
  
  

  const addValue = ()=>{
    HiteshCounter(counter + 1)
    console.log("Value Added", counter)
    
  }


  const decreaseValue = ()=>{
    if(counter > 0){
      HiteshCounter(counter-1);
    }else{
      pass;
    }
    
  }
  //But here the value of the counter in UI is not update hence react will react to chnages on channge in variables and UI will be changed these all called hooks 
  //every hook has a job 

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Vaalue : {counter}</h2>

      <button onClick={addValue}>Add Value</button><br></br>
      <button onClick={decreaseValue}>Decrease Value</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App
