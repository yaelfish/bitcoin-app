import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ContactPage from './views/Contact/ContactPage';
import ContactDetails from './views/Contact/ContactDetails';
import ContactEdit from './views/Contact/ContactEdit';
import ContactAdd from './views/Contact/ContactAdd';
import HomePage from './views/HomePage';
import Footer from './cmps/Footer';
import NavBar from './cmps/NavBar';

import './assets/styles/global.scss';

const history = createBrowserHistory();

export default function App() {
  return (
    <div className="App">
      <Router history={history} >
        <NavBar />
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={ContactPage} path="/contact" exact />
          <Route component={ContactAdd} path="/contact/add" exact />
          <Route component={ContactDetails} path="/contact/:_id" exact />
          <Route component={ContactEdit} path="/contact/:_id/edit" />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

