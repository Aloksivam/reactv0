import React from 'react'
function Dialog(props){
    return(
        <div className='modal'>
            {props.children}
        </div>
    )
}
function ConfirmationDialog(){
    return(
        <Dialog color="blue">
            <h1 className="Dialog-title">
                Thanks!
            </h1>
            <p className='Dialog-message'>
                we'll process your order in less than 24 hours
            </p>
        </Dialog>
    )
}
export default function App() {
  return (
    <><div>App</div>
    <div><ConfirmationDialog/></div></>
    
  )
}
