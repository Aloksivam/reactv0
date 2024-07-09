/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import { Routes,Route,Link } from 'react-router-dom';
// AboutMe
function App() {
  return (
   <div className='App'>
    <nav className='nav'>
      {/* <a href='#' className='nav-item'>HomePage</a> */}
      <Link to="/" className='nav-item'>HomePage</Link>
      <Link to="/About-me" className='nav-item'>About Me</Link>
      {/* <a href='#' className='nav-item'>AboutMe</a> */}
    </nav>

    <Routes>
    <Route path='/'element={<HomePage/>}/>
    <Route path='/about-me'element={<AboutMe/>}/>
    </Routes>
   </div>
  );
}

export default App;
