import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const addvalue=()=>{
   // count=count+1;
    if(count<20) { setCount(prevcounter=>prevcounter+1);
      setCount(prevcounter=>prevcounter+1);  //this is sued to increase value taking prvious one at once
      setCount(prevcounter=>prevcounter+1);

    }
  
   
  }
  const removevalue=()=>{
    count=count-1;
    if(count>0)  setCount(count-1);
   
  }

  return (
    <>
    <h1>Counter :{count}</h1>
    <h2><button onClick={addvalue}>Add Value</button></h2><br/>
    <h2><button onClick={removevalue}>Remove Value</button></h2>
     
    </>
  )
}

export default App
