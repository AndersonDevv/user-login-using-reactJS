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

  const actionLoginDataGoogle = async (userData) => {
    let newUser = {
      id: userData.uid,
      name: userData.displayName,
      avatar: userData.photoURL
    }
    console.log("O avatar é: " + newUser.avatar +"| " +" nome = " + newUser.name + " id = " + newUser.id);
    setUser(newUser)
  }
  
  if(user === null){
    return(
      <Login onReceiveGoogle={actionLoginDataGoogle}/>
    )
  }
  else{
    return (
      <BrowserRouter>
        <Header user ={user} />
        
        <Routers></Routers>
  
        <Footer />
      </BrowserRouter>
    );
  }

}

export default App;
