import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
//App is simply a function which can be declared inside main.jsx too
//and it can be called like app()
const reactEl = React.createElement(
  'a',
   {href: "https://google.com",
        target: '_blank'},
    'click me'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <div>  reactEl
    <App/></div>
  
)
