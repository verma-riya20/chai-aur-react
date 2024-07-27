import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className=" w-full h-screen " style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center mb-10 bottom-12  px-2 text-center  space-x-2">
        <button  onClick={()=>setColor("red")}className='flex text-center outline-none border-cyan-600 rounded-2xl px-2' style={{backgroundColor:"purple"}}>Red</button>
        <button  onClick={()=>setColor("green")}className='flex text-center outline-none border-cyan-600 rounded-2xl px-2 ' style={{backgroundColor:"purple"}}>Green</button>
        <button  onClick={()=>setColor("pink")}className='flex text-center outline-none border-cyan-600 rounded-2xl px-2' style={{backgroundColor:"purple"}}>Pink</button>
        <button  onClick={()=>setColor("yellow")}className='flex text-center outline-none border-cyan-600 rounded-2xl px-2' style={{backgroundColor:"purple"}}>yellow</button>
        <button  onClick={()=>setColor("white")}className='flex text-center outline-none border-cyan-600 rounded-2xl px-2' style={{backgroundColor:"purple"}}>white</button>
        <button  onClick={()=>setColor("Orange")}className='flex text-center outline-none border-cyan-600 rounded-2xl px-2' style={{backgroundColor:"purple"}}>Orange</button>
      </div>
    </div>

    </>
  )
}

export default App
