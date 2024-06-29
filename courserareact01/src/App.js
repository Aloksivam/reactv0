// import logo from './logo.svg';
import './App.css';
// import {Bag,Apples,Pears} from './components/Bag';
import Bag from './components/Bag';
import Apples from './components/Apples';
import Pears from './components/Pears';
import Promo from './components/Promo';
import Btn from './components/Btn';
import ModeToggler from './components/ModeToggler';
function Header(){
  return <h1>Hello alok</h1>
}
function App() {
  return (
    <>
    <Promo heading="alok" promoSubHeading="shivam"/>
    <Bag children={<Apples color="yellow" number="5" />} />
    <Bag children={<Pears friend="Peter" />} />
    <Btn/>
    <ModeToggler/>
    </>
  );
}

export default App;
