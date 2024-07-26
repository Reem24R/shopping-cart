import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Shop from './pages/Shop/shop';
import Cart from './pages/cart/cart';
import ShopContext from './context/productContext';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import NavBar from './components/navbar';
// import ShoppingProvider from './pages/Shop/productContext';
function App() {
 
  return (
    <>
    {/* <ShoppingProvider> */}
    <ShopContext>

     <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    </ShopContext>
    {/* </ShoppingProvider> */}
    </>
  )
}

export default App
