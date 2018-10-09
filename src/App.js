import React, { Component } from 'react';
import SearchBooks from './SearchBooks';
import MainBook from './MainBook';
// import * as BooksAPI from './BooksAPI'
import './App.css';

export default class BooksApp extends Component { 

  render() {
    return (
      <div className="app">
      <MainBook />
       </div>
    )
  }
}