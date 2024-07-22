import logo from './logo.svg';
import './App.css';
import React from 'react'
function App() {
  const [toggle,setToggle]= React.useState('false');
  const clickHandler = () =>{
    setToggle(!toggle)
  }
  React.useEffect(()=>{
    document.title = toggle?"Welcome to Phenomenal Classes":"Using the useEffect hook"
  },[toggle])
  return (
    <div className="App">
     <header>
      <h1>Phenomenal Classes</h1>
     </header>
     <h2>Using the useEffect hook</h2>
     <button onClick={clickHandler}>
      Toggle messages
     </button>
     {toggle && <h2>Welcome to Phenomenal Classes</h2>}
    </div>
  );
}
export default App;
