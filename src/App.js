// import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route} from "react-router-dom"
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import Login from "./component/Login"
import Signup from "./component/Signup"
import Cards from './component/Cards';
import Forgetpass from './component/Forgetpass';
import Search from './component/Search';
import { ToastContainer } from 'react-toastify';
import DashBoard from './component/DashBoard';
import Content from "./component/Content";
import CakeDetails from "./component/CakeDetails";
import Details from "./component/Details"
import Carts from './component/Carts';
import Product from './component/Product';
import CheckOut from './component/CheckOut';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div>      
        <Route path="/" exact component={Home}></Route>
        <Route path="/card" exact component={Cards}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/Signup" exact component={Signup}></Route>
        <Route path="/Search" exact component={Search}></Route>
        <Route path="/Forgetpass" exact component={Forgetpass}></Route>
        <Route path="/dashboard" exact component={DashBoard}></Route>
        <Route path="/Content" exact component={Content}></Route>
        <Route exact path="/cakedetails/:id" exact component={CakeDetails} />
        <Route exact path="/details/:id"component={Details}/>
        <Route path="/cart"  component={Carts}/>
        <Route path="/products" component={Product}/>
        <Route path="/checkout" component={CheckOut}/>
      </div>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}
export default App;
