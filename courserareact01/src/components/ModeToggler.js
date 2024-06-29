import React, {useState} from 'react'
export default function ModeToggler(){
    const [darkModeon, setDarkModeOn] = useState(false)
    // let darkModeOn = true;
    const darkMode = <h1>Dark Mode is on</h1>
    const lightMode = <h1>Light Mode is on</h1>
    const modeChange = ()=>setDarkModeOn(!darkModeon)
    //you can't do this without use of useState hooks. as react's variable updation is not in our control
    return(
        <div>
            {darkModeon?darkMode:lightMode}
            <button onClick={modeChange}>Click Me to change the mode</button>
        </div>
    )
}