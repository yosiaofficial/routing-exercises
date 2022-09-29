import React from 'react';
import './App.css';
import Menu from './Menu.js';
import About from './About.js';
import Contact from './Contact.js';
import{BrowserRouter,Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div >
        <Menu />
        <Switch>
        <Route path="/" exact component ={Home} />
        <Route path="/About" component ={About} />
        <Route path="/Contact" component ={Contact} />
       </Switch>
    </div>
    </BrowserRouter>
  );
}
const Home = () => {
  return (
    <div className="Contactstyle">
    <h1>this is Home page</h1>
   </div>
  )
}
export default App;
