
import './App.css';
import { useState } from 'react'

function App() {
  let [ counter, changeCounter ] = useState(1)
  window.changeCounter = changeCounter //SHOULD NOT MAKE GLOBAL VARIABLES THIS WAY WITH A FINISHED APP. JUST USE FOR TESTING/DEBUG

  return ( //return can only return ONE parent element. use div as a wrapper for the return.
    <div> 
      <h1>{counter}</h1>
      <h2>{counter}</h2>
    </div>
  )
}


export default App;
