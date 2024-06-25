/* eslint-disable no-unused-vars */

import { useState, useCallback ,useEffect,useRef} from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [Length, setLength] = useState(8);

  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef=useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }
    for (let i = 0; i < Length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); //this will return index
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [Length, numberAllowed, charAllowed, setPassword]);
  const copyPasswordtoClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password)

    // let bt = document.getElementById('btn')
    // bt.onclick((e)=>{
    //   bt.innerHTML= 'value copied to clipboard'
    // })  //it has to be done by using states. i will try that later

  },[password])
  useEffect(()=>passwordGenerator(),[Length,numberAllowed,charAllowed,passwordGenerator])
  
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly ref={passwordRef}
          />
          <button id="btn" onClick={copyPasswordtoClipboard} className="outline-none px-3 py-0.5 bg-blue-700 rounded-xl shrink-0 text-white">
            copy
          </button>
        </div>
        <div className="flex text-5m gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6}
            max={100} 
            value={Length}
            className="cursor-pointer"
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length:{Length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={()=>{setNumberAllowed((prev)=>!prev) ;}} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} id='charInput' onChange={()=>{setCharAllowed((prev)=>!prev) ;}} />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
