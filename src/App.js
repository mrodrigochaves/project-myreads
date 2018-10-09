import React, { Component } from 'react';
import SearchBooks from './SearchBooks';
import MainBook from './MainBook';
import * as BooksAPI from './BooksAPI'
import './App.css';

export default class BooksApp extends Component { 
  state = {
    books:[]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
    
  }

  render() {
    console.log(this.state.books);
    return (
      <div className="app">
      <MainBook
      books={this.state.books} />
       </div>
    );
  }
}