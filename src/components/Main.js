import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <About />
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/about" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
