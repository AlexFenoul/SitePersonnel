import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Header } from './features/layout/header/Header';
import { Footer } from './features/layout/footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/about-me">
            <p>About me</p>
          </Route>
          <Route exact path="/portfolio">
            <p>Portfolio</p>
          </Route>
          <Route exact path="/cv">
            <p>CV</p>
          </Route>
        </Switch>
        <Footer></Footer>  
      </div>
    </Router>
  );
}

export default App;
