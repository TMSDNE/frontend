import React, { Component } from 'react';
import ArticleList from './components/ArticleList';
import Header from './components/Header';
import SelectDate from './components/SelectDate';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">

        { /* <Header /> */ }
        <Login login={} />
        {/* <SelectDate /> */}
        { /*<ArticleList /> */ }
      </div>
    );
  }
}

export default App;
