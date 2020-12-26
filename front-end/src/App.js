import React from 'react';
import Footer from './components/HomeScreen/Footer';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import './bootstrap.min.css';
import HomeScreen from './screens/HomeScreen';
import NavBar from "./components/Commons/NavBar";
import ProductsScreen from "./screens/ProductsScreen";
import AboutScreen from "./screens/AboutScreen";
import EventScreen from "./screens/EventScreen";
import Login from "./screens/Login";
import ServicesScreen from "./screens/ServicesScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import PaymentScreen from "./screens/PaymentScreen";
import SearchScreen from "./screens/SearchScreen";
import SingleProductScreen from "./screens/SingleProductScreen";


function App() {

    //Clear warning
    // console.log = console.warn = console.error = () => {};
    return (
        <Router>
            <NavBar/>
            <main>
                <Route path='/' component={HomeScreen} exact/>
                <Route path='/products' component={ProductsScreen}/>
                <Route path='/events' component={EventScreen}/>
                <Route path='/about' component={AboutScreen}/>
                <Route path='/login' component={Login} />
                <Route path='/services' component={ServicesScreen}/>
                <Route path='/cart' component={CheckoutScreen}/>
                <Route path='/payment' component={ PaymentScreen }/>
                <Route path='/search' component={SearchScreen} />
                <Route exact path='/product/:id' component={SingleProductScreen}/>
            </main>
            <Footer/>
        </Router>
    );
}

export default App;
