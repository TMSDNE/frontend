import React, { Component } from 'react';
import ArticleList from './components/ArticleList';
import Header from './components/Header';
import SelectDate from './components/SelectDate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SelectDate />
        <ArticleList />
      </div>
    );
  }
}

export default App;
