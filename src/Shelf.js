import React from 'react';
import Book from './Book';


/*TODO:
*/

const Shelf = props => {
   return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.books.map(book => (
               <Book key={book.id} title={book.title}
                  authors={book.authors} bookCover={book.imageLinks.thumbnail} shelf={book.shelf} />
            ))}
          </ol>
        </div>
      </div>
   );
};

export default Shelf;
