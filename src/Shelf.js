import React from 'react';
import Book from './Book';

const Shelf = props => {
   return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.DOMtitle}</h2>
        <div className="bookshelf-books">
         {!props.books.length ? <div>No Results Found</div>
            :
            <ol className="books-grid">
            {props.books.map(book => (
               <Book key={book.title} book={book} bookCover={book.imageLinks.thumbnail} onShelfChange={props.onShelfChange} />
            ))}
            </ol>
         }
        </div>
      </div>
   );
};

export default Shelf;
