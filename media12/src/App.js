/* eslint-disable no-unused-vars */
import {
    useState,
    useRef
  } from "react"; 
  import "./App.css";
  
  function App() { 
    const inputRef = useRef(null); 
    const inputRef2 = useRef(null); 
    const resultRef = useRef(null); 
    const [result, setResult] = useState(0); 
   
    function plus(e) { 
      e.preventDefault(); 
      setResult((result) => Number(inputRef.current.value)+Number(inputRef2.current.value)); 
    }; 
   
    
    function minus(e) { 
      e.preventDefault(); 
      setResult((result) => Number(inputRef.current.value)-Number(inputRef2.current.value)); 
    }; 
   
    
    function times(e) { 
      e.preventDefault(); 
      setResult((result) => Number(inputRef.current.value)*Number(inputRef2.current.value)); 
    }; 
   
    
    function div(e) { 
      e.preventDefault(); 
      setResult((result) => Number(inputRef.current.value)/Number(inputRef2.current.value)); 
    };     
    function resetInput(e) { 
        e.preventDefault(); 
        inputRef.current.value=0
        inputRef2.current.value=0
    }; 
   
    function resetResult(e) { 
        e.preventDefault(); 
        setResult(0)
    }; 
   
    return ( 
      <div className="App"> 
        <div> 
          <h1>Simplest Working Calculator</h1> 
        </div> 
        <form>  
          <input
            pattern="[0-9]" 
            ref={inputRef} 
            type="number" 
            placeholder="Enter 1st nr" 
          /> 
           <input
            pattern="[0-9]" 
            ref={inputRef2} 
            type="number" 
            placeholder="Enter 2nd nr" 
          /> 
          <button onClick={plus}>add</button> 
          <button onClick={minus}>sub</button> 
          <button onClick={times}>multiply</button> 
          <button onClick={div}>Divide</button> 
          <button onClick={resetInput}>ResetInput</button> 
          <button onClick={resetResult}>ResetResult</button> 
          {/* Add the subtract button */} 
          {/* Add the multiply button */} 
          {/* Add the divide button */} 
          {/* Add the resetInput button */} 
          {/* Add the resetResult button */} 
          <p ref={resultRef} id="result">Result: {result} 
          </p>
        </form> 
      </div> 
    ); 
  } 
   
  export default App; 

// import {
//     useState,
//     useRef
//   } from "react"; 
//   import "./App.css";
  
//   function App() { 
//     const inputRef = useRef(null); 
//     const resultRef = useRef(null); 
//     const [result, setResult] = useState(0); 
   
//     function plus(e) { 
//       e.preventDefault(); 
//       setResult((result) => result + Number(inputRef.current.value)); 
//     }; 
   
//     function minus(e) { 
//       e.preventDefault(); 
//       setResult((result) => result - Number(inputRef.current.value)); 
//     };
   
//     function times(e) { 
//       e.preventDefault(); 
//       setResult((result) => result * Number(inputRef.current.value)); 
//     }; 
   
//     function divide(e) { 
//       e.preventDefault(); 
//       setResult((result) => result / Number(inputRef.current.value)); 
//     };
   
//     function resetInput(e) { 
//       e.preventDefault();
//       inputRef.current.value = '';
//     }; 
   
//     function resetResult(e) { 
//         e.preventDefault(); 
//       setResult((result) => 0); 
//     }; 
   
//     return ( 
//       <div className="App"> 
//         <div> 
//           <h1>Simplest Working Calculator</h1> 
//         </div> 
//         <form> 
//           <p ref={resultRef}> 
//             {result}
//           </p> 
//           <input
//             pattern="[0-9]" 
//             ref={inputRef} 
//             type="number" 
//             placeholder="Type a number" 
//           /> 
//           <button onClick={plus}>add</button> 
//           <button onClick={minus}>subtract</button>
//           <button onClick={times}>multiply</button>
//           <button onClick={divide}>divide</button>
//           <button onClick={resetInput}>reset input</button>
//           <button onClick={resetResult}>reset result</button>
//         </form> 
//       </div> 
//     ); 
//   } 
   
//   export default App; 
