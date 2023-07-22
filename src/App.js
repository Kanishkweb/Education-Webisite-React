import React, { useRef } from 'react';
import './App.css';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import ErrorComponent from './components/errorComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopLoadingBar from 'react-top-loading-bar';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App = () => {
  const loadingBarRef = useRef(null);

  return (
    <>
      <TopLoadingBar color="#fff" progress={0} height={3} ref={loadingBarRef} />
      <Router>
        <Navbar loadingBarRef={loadingBarRef} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route component={ErrorComponent} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
