import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/views/home/Login';
import Main from './components/views/home/Main';
import Nav from './components/views/public/Nav';
import Signup from './components/views/home/Signup';
import { Provider } from 'react-redux';
import store from './redux/store/Store';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <Nav/>
            <Switch>
              <Route exact path = "/Login" component = {Login}/>
              <Route exact path = "/" component = {Main}/>
              <Route exact path = "/Sign Up" component = {Signup}/>
            </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;