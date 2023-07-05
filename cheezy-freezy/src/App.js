import Footer from './components/UI/Footer';
import Navigation from './components/Navigation';
import Menu from "./components/Menu/Menu"
import Header from './components/UI/Header';
import Cart from './components/Cart/Cart';
import Backdrop from './components/UI/Backdrop';
import { useSelector } from 'react-redux';

function App() {

  const cartOpen = useSelector(state=>state.cart.showCart)

  return (
    <>
      <Navigation/>
      <Header/>
      <Menu/>
      {cartOpen && <Cart/>}
      {cartOpen && <Backdrop/>}
      <Footer/>

      
    </>
  );
}

export default App;
