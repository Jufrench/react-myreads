import React from 'react';
import Book from './Book';

const Shelf = props => {

   return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.DOMtitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
               {!props.books ? <div>No Results Found</div>
                  :
                  props.books.filter(book => book.shelf === props.shelf)
                  .map(book => (
                     <Book key={book.id} book={book} title={book.title} bookCover={book.imageLinks.thumbnail} onShelfChange={props.onShelfChange} />
                  ))}
          </ol>
        </div>
      </div>
   );
};

export default Shelf;
