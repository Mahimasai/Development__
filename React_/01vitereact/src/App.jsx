import Chai from "./chai"

function App() {
  
  const username = "chai lover"
  return ( //we can return only one element so we use fragment 
    <>
   <Chai/>
   <h1>chai our react {username}</h1>  
   </>
  )
}

export default App
