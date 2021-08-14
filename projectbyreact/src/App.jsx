import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './views/home/Login';
import Main from './views/home/Main';
import Nav from './views/public/Nav';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Nav/>
          <Switch>
            <Route exact path = "/Login" component = {Login}/>
            <Route exact path = "/" component = {Main}/>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;