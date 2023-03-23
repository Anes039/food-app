import './App.css';
import { useState } from 'react';

import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './components/Store/CartProvider';

function App() {
  const [isShown,setIsShown] = useState(false);
 
  const onShowCart = () => {
    setIsShown(true);
  }
  const onHideCart = () => {
    setIsShown(false);
  }

  return (
    <CartProvider>
      <Header onShowCart = {onShowCart}/>
      {isShown && <Cart onCloseCart = {onHideCart} />}
    </CartProvider>
  );
}
//items={cartItems} onAddItem={onAddItemHandler}
export default App;
