import React, { Component } from 'react';
import ArticleList from './components/ArticleList';
import Header from './components/Header';
import SelectDate from './components/SelectDate';
import Login from './components/Login';
import {PrivateRoute} from './components/PrivateRoute';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/login' component={Login} />
       <Header />
        {/* <SelectDate /> */}
        <PrivateRoute exact path='/' component={ArticleList} />
      </div>
    );
  }
}

export default App;
