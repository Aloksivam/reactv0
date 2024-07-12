/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import {
  useState,
  useRef
} from "react"; 
// const Form = () => { 
//   return ( 
//     <div> 
//       <input type="text" /> 
//     </div> 
//   ); 
//  }; 


// const Form = () => { 
//   const inputRef = useRef(null); 
 
//   const handleSubmit = () => { 
//     const inputValue = inputRef.current.value; 
//     console.log(inputValue)
//     // Do something with the value 
//   } 
//   return ( 
// <><form onSubmit={handleSubmit}> 
//       <input ref={inputRef} type="text" /> 
//     </form> 
//     {/* <p>{inputRef.current.value}</p> */}
//     </>

    
    
//   ); 
//  }; 

// const Form = () => { 
//   const [value, setValue] = useState(""); 
 
//   const handleChange = (e) => { 
//     setValue(e.target.value) 
//   } 
 
//   return ( 
//     <form> 
//       <input 
//         value={value} 
//         onChange={handleChange} 
//         type="text" 
//       /> 
//       <p>{value}</p>
//     </form> 
//   ); 
//  }; 


function App() {
  const [name,setName]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log('Form submitted'+name)
    // clearing the output
    setName("")

  } 
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>

        <fieldset>
          <div className='field'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' placeholder='Name' name="name" value={name} onChange={e=>setName(e.target.value)}/>
       </div>
        <p>{name}</p> 
        <button type='submit' disabled={!name}>Submit</button> </fieldset>
      </form>
    </div>

  );
}

export default App;
