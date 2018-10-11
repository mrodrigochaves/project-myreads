import React, { Component } from 'react';
import BooksSearch from './BookSearch';
import { Route } from 'react-router-dom';
import BookMain from './BookMain';
import * as BooksAPI from './BooksAPI'
import './App.css';

export default class BooksApp extends Component {
  state = {
    books: []
  }

  async componentDidMount() {
  const books = await BooksAPI.getAll()
  this.setState({ books })
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
         <BookMain
          books={this.state.books}
          changeShelf={this.changeShelf} 
          />
          )} />

       <Route path="/search" render={() =>(
        <BooksSearch
        changeShelf={this.changeShelf}
        books={this.state.books}
      />
      )} />

      </div>
      
    );
  }
}