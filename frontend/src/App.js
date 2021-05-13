import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap' 
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen.js'
import LoginSreen from './screens/LoginScreen.js'
import RegisterScreen from './screens/RegisterScreen.js'
import ProfileScreen from './screens/ProfileScreen.js'
import ShippingScreen from './screens/ShippingScreen.js'

function App() {
  return (
    <Router>
      <Header/>
        <main className="py-3">
          <Container>
            <Route path='/login' component={LoginSreen}/>
            <Route path='/register' component={RegisterScreen}/>
            <Route path='/profile' component={ProfileScreen}/>
            <Route path='/shipping' component={ShippingScreen}/>
            <Route path='/product/:id' component={ProductScreen}/>
            <Route path='/cart/:id?' component={CartScreen}/>
            <Route path='/' component={HomeScreen} exact/>
          </Container>
        </main>
      <Footer/>
    </Router>
  );
}

export default App;
