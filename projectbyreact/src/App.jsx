import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/views/home/Login';
import Main from './components/views/home/Main';
import Nav from './components/views/public/Nav';
import ReduxApp01 from './practice/ReduxApp01';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <ReduxApp01/>
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