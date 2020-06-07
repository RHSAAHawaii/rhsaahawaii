import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import About from './pages/About';
import Error from './pages/Error';
import Privacy from './pages/Privacy';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <NavBar />
            <Switch>
              <Route path="/" component={Landing} exact/>
              <Route path="/about" component={About}/>
              <Route path="/privacy" component={Privacy}/>
              <Route component={Error}/>
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;