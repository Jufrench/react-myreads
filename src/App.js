import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Shelf from './Shelf';
import { Route, Link } from 'react-router-dom';

const shelves = {
   currentlyReading: ['Currently Reading', 'currentlyReading'],
   wantToRead: ['Want to Read', 'wantToRead'],
   read: ['Read', 'read']
};

class BooksApp extends Component {
  state = {
     books: [],
     searchResults: []
  }

  componentDidMount() {
      BooksAPI.getAll()
         .then(books => {
            this.setState(() => {
               console.log(books);
               return { books };
            });
         });
  }

   handleShelfChange = (book, newShelf) => {
      BooksAPI.update(book, newShelf)
         .then((response) => {
            let bookId = book.id;
            let newBooks = this.state.books.map(book => (
               book.id === bookId ? { ...book, shelf: newShelf } : book
            ));
            this.setState({
               books: newBooks
            });
         });
   }

   searchBooks = event => {
      let query = event.target.value;
      BooksAPI.search(query)
         .then(res => {
            this.setState(() => (
               { searchResults: res }
            ));
            console.log(this.state.searchResults);
         });
   }

  render() {
    return (
      <div className="app">
         <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
               <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
               {Object.keys(shelves).map(shelf => (
                  <Shelf key={shelf} shelf={shelves[shelf][1]} DOMtitle={shelves[shelf][0]}
                  books={this.state.books} onShelfChange={this.handleShelfChange} />
               ))}
            </div>
            <div className="open-search">
               <Link to="/search"><button>Add a book</button></Link>
            </div>
          </div>
         )} />

         <Route path="/search" render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input onChange={this.searchBooks} type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
               {/* <ol className="books-grid"></ol> */}
               <Shelf books={this.state.searchResults} onShelfChange={this.handleShelfChange} />
            </div>
          </div>
         )} />
      </div>
    )
   }
}

export default BooksApp;
