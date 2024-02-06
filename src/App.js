import './App.css';
import NavigatorBar from './component/navigator-bar';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import Shop from './Page/shop';
import ShopCategory from './Page/cataegory';
import Product from './Page/product';
import LogIn from './Page/loginSignIn';
import Cart from './Page/cart';
import Footer from './component/footer';
import men_banner from  './component/Assets/banner_mens.png'
import women_banner from  './component/Assets/banner_women.png'
import kid_banner from  './component/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigatorBar/>
       {/* comment */}
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path='/kid' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=':productID' element={<Product/>}/>
         </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LogIn/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
