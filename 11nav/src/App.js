/* eslint-disable no-unused-vars */
// import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import { Routes,Route,Link } from 'react-router-dom';
import logo from './assets/logo.png'
// AboutMe
function App() {
    let time = new Date();
  const day = time.toLocaleString('en-us',{weekday:"long"})
  const morning = time.getHours()>=6 && time.getHours()<=12;
  let dayMessage;
  if(day.toLowerCase()!=='sunday'){
    dayMessage=`Happy ${day}`
  }
  else{
    dayMessage='stay calm and keep having fun'
  }
  const alokurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRb2FOBtmX_Ln4UgttT6SNvG6eszCKw7tT-w&s'
  return (
   <div className='App'>
    <nav className='nav'>
      <Link to="/" className='nav-item'>HomePage</Link>
      <Link to="/About-me" className='nav-item'>About Me</Link>
    </nav>

    <Routes>
    <Route path='/'element={<HomePage/>}/>
    <Route path='/about-me'element={<AboutMe/>}/>
    </Routes>
    <h2>
      {dayMessage}
    </h2>

    <h1>First images using import</h1>
    <img 
    height={200}
    src={logo}
    alt='logo'/>
    <h1>Second image without using import we can do it by using require</h1>
    {/* alt is not required using require */}
    <img 
    height={200}
    src={require("./assets/logo.png")}
    alt='logo'/>
    <h1>Third image taken from internet</h1>
    {/* alt is not required using require */}
    <img 
    height={200}
    src={alokurl}
    alt='logo'/>
   </div>

  );
}

export default App;
