import React from 'react';
import Header from './components/partials/Header';
import Characters from './components/ui/Characters';
import Contact from './components/partials/Contact';
import About from './components/partials/About';
import Links from './components/partials/Links';
import {Link, Route, BrowserRouter, Router, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">

        <BrowserRouter>
          <Switch>

            <Route exact path="/" component={Characters}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/links" component={Links}/>
  
          </Switch>

          
        </BrowserRouter>

    </div>
  );
}

export default App;
