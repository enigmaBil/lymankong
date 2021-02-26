import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import NotFoundPage from './pages/not-found/NotFoundPage'


function App() {
  return (
    <Router>
    <Header />
    <Switch>
      <Route path='/' exact component={Home} />
      {/* <Route path='/About' component={About} />
      <Route path='/FreeEstimate' component={FreeEstimate} /> */}
      <Route path="*" component={NotFoundPage} />
    </Switch>
    <Footer />
  </Router>
  );
}

export default App;
