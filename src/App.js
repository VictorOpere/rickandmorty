import React from 'react';
import Characters from './components/ui/Characters';
import Contact from './components/partials/Contact';
import About from './components/partials/About';
import Links from './components/partials/Links';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Episodes from './components/Episode/Episodes';

function App() {
  return (
    <div className="App">

        <BrowserRouter>
          <Switch>

            <Route exact path="/" component={Characters}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/links" component={Links}/>
            <Route path="/episodes" component={Episodes}/>
  
          </Switch>

          
        </BrowserRouter>


    </div>
  );
}

export default App;
