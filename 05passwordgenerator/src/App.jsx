import { useState ,useCallback,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [number, setnumber] = useState(false)
  const [charAllow, setchar] = useState(false)
  const [password, setpassword] = useState("")

  //useRef hook
  const passwordRef=useRef(null)

  const copytoclipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  const passwordgenerator=useCallback(
    (e) => {
      let pass=''
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(number) str+="1234567890"
      if(charAllow) str+="~@#$%^&*_"
     for (let i= 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length +1);
      pass+=str.charAt(char)
 }
 setpassword(pass)
      
    },
    [length,number,charAllow,setpassword],
  )
  useEffect(()=>{passwordgenerator()}, [length,number,charAllow,passwordgenerator])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg text-white px-4 my-8 bg-gray-800">
      <h1 className='mt-10 pt-7 pb-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 text-black">
        <input
        type="text"
        value={password}
       className='outline-none w-full px-3 py-1'
       placeholder='Password'
        readOnly
        ref={password}></input>
        <button onClick={copytoclipboard} className=
        'outline-none bg-blue-700 text-white px-3 py-0.5'>Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}></input>
          <label>Length :{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          defaultChecked={number}
          id='numberinput'
          onChange={(e)=>{setnumber((prev)=>!prev)}}></input>
          <label>Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          defaultChecked={charAllow}
          id='charinput'
          onChange={(e)=>{setchar((prev)=>!prev)}}></input>
          <label>Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
