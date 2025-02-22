import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { UserData } from './context/UserContext';
import Verify from './pages/Verify';
import Loading from './components/Loading';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { LogIn } from 'lucide-react';
import NotFound from './pages/NotFound';
import ProductPage from './pages/ProductPage';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import OrderProcessing from './pages/OrderProcessing';
import Orders from './pages/Orders';
import OrderPage from './pages/OrderPage';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
  const {isAuth,loading} = UserData();
  
  return (
    <>
      {
        loading?<Loading/>:<BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/product/:id' element={<ProductPage/>}/>
          <Route path='/cart' element={isAuth?<Cart/>: <LogIn/>}/>
          <Route path='/orders' element={isAuth?<Orders/>: <LogIn/>}/>
          <Route path='/order/:id' element={isAuth?<OrderPage/>: <LogIn/>}/>
          <Route path='/admin/:dashboard' element={isAuth?<AdminDashboard/>: <LogIn/>}/>
          <Route path='/checkout' element={isAuth?<Checkout/>: <LogIn/>}/>
          <Route path='/payment/:id' element={isAuth?<Payment/>: <LogIn/>}/>
          <Route path='//ordersuccess' element={isAuth?<OrderProcessing />: <LogIn/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/login' element={isAuth ? <Home/> : <Login/>}/>
          <Route path='/verify' element={isAuth ? <Home/> :<Verify/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      }
    </>
  )
}

export default App