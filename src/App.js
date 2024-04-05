import { useState } from 'react';
import './App.css';

function App() {
  let [count,Setcount]=useState(0);

  return (
    <div className="App">
      <h1>Conting app</h1>
      <span>{count}</span><br />
      <button onClick={()=>Setcount(++count)}>Increase</button>
      <button onClick={()=>Setcount(--count)}>Decrease</button>
      <button onClick={()=>Setcount(count=0)}>Reset</button>



  
    </div>
  );
}
export default App;
