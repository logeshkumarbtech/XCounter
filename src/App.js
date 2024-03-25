import { useState } from "react";


function App() {
  const [count, setCount] =useState(0);

  const handleInc =(e)=>{
    setCount((prevCount)=>prevCount+1);
  } 
  const handleDec =(e)=>{
    setCount((prevCount)=>prevCount-1);
  } 


  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </div>
  );
}

export default App;
