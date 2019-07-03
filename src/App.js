import React from 'react';
import './App.css';
import {Switch,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Cart from './Components/Cart';
import Default from './Components/Default';
import Modal from './Components/Modal';


function App() {
  return (
<React.Fragment>
<Navbar/>
<Switch>
     <Route exact path="/" component={ProductList}></Route> 
     <Route path="/Details" component={Details}></Route>
     <Route path="/Cart" component={Cart}></Route>
     <Route component={Default}></Route>
     </Switch>

     <Modal/>
</React.Fragment>
  )
}

export default App;


