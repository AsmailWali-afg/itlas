import './App.css'
import Navbar from './components/Navber';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Service from './pages/service';
import Ragister from './pages/Ragister';
import Login from './pages/login';
import Erorr from './pages/Error';
import Footer from './components/Footer';
import Admin from './pages/Admin';
import AdminUser from './pages/AdminUser';
import AdminContact from './pages/AdminContact';
import Logout from './pages/Logout';
import AdminEdit from './pages/AdminEdit';
import AdminService from './layout/AdminService';
import AddService from './layout/AddService';
import SingleProduct from './pages/SingleProduct';

function App() {

 return(
  <>
  
  <Router>
  <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Ragister' element={<Ragister/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/services' element={<Service/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='*' element={<Erorr/>}/>
      <Route path='/services/:id/order' element={<SingleProduct/>} />




      <Route path='/admin' element={<Admin/>}>

      <Route path='user' element={<AdminUser/>}/>
      <Route path='contact' element={<AdminContact/>}/>
      <Route path='service'element={<AdminService/>} />
      <Route path='user/:id/edit' element={<AdminEdit/>}/>
      <Route path='service/AddService'element={<AddService/>} />
      </Route>


    </Routes>

    <Footer/>

  </Router>


  </>
 )

}

export default App
