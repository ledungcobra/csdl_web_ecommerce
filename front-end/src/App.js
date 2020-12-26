import React from 'react';
import Footer from './components/HomeScreen/Footer';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import './bootstrap.min.css';
import HomeScreen from './screens/HomeScreen';
import NavBar from "./components/Commons/NavBar";
import LogoProduct from "./components/HomeScreen/LogoProduct";
import ProductsScreen from "./screens/ProductsScreen";
import AboutScreen from "./screens/AboutScreen";
import EventScreen from "./screens/EventScreen";
import Login from "./screens/Login";
import ServicesScreen from "./screens/ServicesScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import PaymentScreen from "./screens/PaymentScreen";
import CartScreen from "./screens/CartScreen";


function App() {

    //Clear warning
    // console.log = console.warn = console.error = () => {};
    const data = localStorage.getItem("cartItems");
    console.log(data);
    return (
        <Router>
            <NavBar/>
            <LogoProduct />
            <main>
                <Route path='/' component={HomeScreen} exact/>
                <Route path='/products' component={ProductsScreen}/>
                <Route path='/events' component={EventScreen}/>
                <Route path='/about' component={AboutScreen}/>
                <Route path='/login' component={Login} />
                <Route path='/services' component={ServicesScreen}/>
                <Route path='/checkout' component={CheckoutScreen}/>
                <Route path='/payment' component={ PaymentScreen }/>
                <Route path='/cart' component={ CartScreen}/>
            </main>
            <Footer/>
        </Router>
    );
}

export default App;
