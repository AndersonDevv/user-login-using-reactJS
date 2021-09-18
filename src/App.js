import React from 'react';
import './App.css';

import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routers';
import { useState } from 'react';

import Login from './Pages/Login/login';

function App() {

  const [user, setUser] = useState(null)

  if(user === null){
    return(
      <Login />
    )
  }
  else{
    return (
      <BrowserRouter>
        <Header />
        
        <Routers></Routers>
  
        <Footer />
      </BrowserRouter>
    );
  }

}

export default App;
