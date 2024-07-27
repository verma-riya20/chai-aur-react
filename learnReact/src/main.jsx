import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function Myapp(){
  return <h1>
    Hello Riya ji
  </h1>
}
const Message=React.cloneElement('h3',{},'How r you')
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Message/>
  </React.StrictMode>,
)
