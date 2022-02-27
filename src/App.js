import Home from "./pages/Home";
import {Routes, Route} from 'react-router-dom'
import About from "./pages/About"
import Shop from './pages/Shop'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import Productinfo from "./pages/Productinfo";
import Login_register from "./pages/Login_register";
import Dashboard from "./pages/Dashboard";
import Fakestore from './pages/Fakestore'
import Logout from "./pages/Logout";
import ErrorPage from "./pages/ErrorPage";
import Sell from "./pages/Sell";
function App() {
  return (


    
 <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/about" element={<About />} />
   <Route path="/shop" element={<Shop />} />
   <Route path="/blog" element={<Blogs />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/cart" element={<Cart /> } />
   <Route path="/account" element={<Account /> } />
   <Route path="/sell" element={<Sell /> } />
   <Route path="/productinfo" element={<Productinfo /> } />
   <Route path="/checkout" element={<Checkout /> } />
   <Route path="/login_register" element={<Login_register /> } />
   <Route path="/logout" element={<Logout /> } />
   <Route path="/fakestore" element={<Fakestore /> } />
   <Route path="/dashboard" element={<Dashboard /> } />


   <Route path="*"  element={<ErrorPage />} />

  

 </Routes>


  );
}

export default App;
