import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  //let myobj={
  //  user:"riya",
  //  age:19
  

  return (
    <>
      
      <h1 className='bg-pink-100 text-center rounded-2xl mb-4'>Tailwind Css</h1>
     <Card username="riya" btn="click me"/>
     <Card username="riya" btn="click me"/>
    </>
  )
}

export default App
