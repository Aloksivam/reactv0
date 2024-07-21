//making expense tracker
//will implement useReducer which is advanced version of useState hook
//useState hook starts with initial state while useReducer starts with initial state and reducer function 
//reducer function is action object
//useState will make unnecessary extensive so we will go with useReducer hook
import React from 'react'
// import 'App.css'
const reducer=(state,action)=>{
    if(action.type==='buy_ingredients') return {money:state.money-10};
    if(action.type==='sell_a_meal') return {money:state.money+10};
    return state;
}
export default function App() {
    const initialstate = {money:100}
    const [state, dispatch] = React.useReducer(reducer,initialstate);
  return (
    <div className='App'>
        <h1>Wallet:{state.money}</h1>
        <div>
            <button onClick={()=>dispatch({type:'buy_ingredients'})}>Shopping for veggies!</button>
            <button onClick={()=>dispatch({type:'sell_a_meal'})}>Serve a meal to the customer!</button>
        </div>
    </div>
  )
}
