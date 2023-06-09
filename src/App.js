import './App.css';
import Mobiles from './components/Mobiles/Mobiles';
import CartItems from './components/cart-items/CartItems';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import "primereact/resources/primereact.min.css";                                       
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import Add from './components/Mobiles/add-new-product/Add';

function App() {

  return (
    <div className="App">
      <Header />
      <div>
      <Routes>
        <Route path="/CartItems" element={<CartItems />} />
        <Route path='/add' element={<Add/>}/>
        <Route path='/' element={<Mobiles/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
