import React, { Component } from 'react';
import SearchBooks from './SearchBooks';
import { Route } from 'react-router-dom';
import MainBook from './MainBook';
import * as BooksAPI from './BooksAPI'
import './App.css';

export default class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })

  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {

    return (
      <div className="app">
      <Route exact path="/" render={() =>(
         <MainBook
          books={this.state.books}
          changeShelf={this.changeShelf} 
          />
          )} />
       <Route path="/search" render={() =>(
        <SearchBooks
        changeShelf={this.changeShelf}
      />
      )} />
      </div>
    );
  }
}