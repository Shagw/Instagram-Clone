import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './Components/Navbar';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Components/screens/Home';
import Login from './Components/screens/Login';
import Signup from './Components/screens/Signup';
import Profile from './Components/screens/Profile';
import CreatePost from './Components/screens/CreatePost';

function App() {
  return (
    <BrowserRouter>
         <NavbarComponent/>
         <Route exact path="/"><Home/></Route>
         <Route path="/signin"><Login/></Route>
         <Route path="/signup"><Signup/></Route>
         <Route path="/profile"><Profile/></Route>
         <Route path="/createposts"><CreatePost/></Route>
    </BrowserRouter>

  );
}

export default App;
