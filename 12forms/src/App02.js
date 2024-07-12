// feedback form
import "./App.css";
import { useState } from "react";
function App() {
    const [score,setScore]=useState(0);
    const [comment,setComment]=useState('');
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(Number(score)<=5 && comment.length<=10)
      {alert('Please provide a comment explaining why the experience was poor')
      return;}
      alert('form submitted')
      setComment("")
      setScore("10")
    } 
    return (
      <div className='App'>
        <form onSubmit={handleSubmit}>
  
          <fieldset>
            <h2>Feedback Form</h2>
            <div className='field'>
            <label htmlFor='name'>{score}⭐</label> <br/>
            <input type='range' min='0' max='10' name="score" value={score} onChange={e=>setScore(e.target.value)}/>
         </div>
         <div className="field">
            <label htmlFor="comment">Comment:</label>
            <br/>
            <textarea id="comment" value={comment} onChange={e=>setComment(e.target.value)}>
                <caption>Comment</caption>
            </textarea>
         </div>
          {/* <p>{score}</p>  */}
          <button type='submit' disabled={!score}>Submit</button>
           </fieldset>
        </form>
      </div>
  
    );
  }
  
  export default App;
  