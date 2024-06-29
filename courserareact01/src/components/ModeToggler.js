export default function ModeToggler(){
    let darkModeOn = true;
    const darkMode = <h1>Dark Mode is on</h1>
    const lightMode = <h1>Light Mode is on</h1>
    const modeChange = ()=>darkModeOn=!darkModeOn
    return(
        <div>
            {darkModeOn?darkMode:lightMode}
            <button onClick={modeChange}>Click Me to change the mode</button>
        </div>
    )
}