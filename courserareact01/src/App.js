// import logo from './logo.svg';
import './App.css';
// import {Bag,Apples,Pears} from './components/Bag';
import Bag from './components/Bag';
import Apples from './components/Apples';
import Pears from './components/Pears';
import Promo from './components/Promo';
import Btn from './components/Btn';
import ModeToggler from './components/ModeToggler';
import ClickCounter from './components/ClickCounter';
import InputComponent from './components/InputComponent';
import RegisterForm from './components/RegisterForm';
import TextInputWithFocusButton from './components/TextInputWithFocusButton';
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
    <ClickCounter/>
    <InputComponent/>
    <RegisterForm/>
    <TextInputWithFocusButton/>
    </>
  );
}

export default App;
