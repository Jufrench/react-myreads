import React, { Component } from 'react';

class Book extends Component {

   bookStyle = {
      width: 128,
      height: 193,
      backgroundImage: `url(${this.props.bookCover})`
   };

   handleShelfChange = event => {
      let newShelf = event.target.value;
      this.props.onShelfChange(this.props.book, newShelf);
   }

   render() {
      const { shelf, title, authors } = this.props.book;
      return (
         <li>
           <div className="book">
             <div className="book-top">
               <div className="book-cover" style={this.bookStyle}>
               </div>
               <div className="book-shelf-changer">
                 <select value={shelf} onChange={this.handleShelfChange}>
                   <option value="move" disabled>Move to...</option>
                   <option value="currentlyReading">Currently Reading</option>
                   <option value="wantToRead">Want to Read</option>
                   <option value="read">Read</option>
                   <option value="none">None</option>
                 </select>
               </div>
             </div>
             <div className="book-title">{title}</div>
               {this.props.book.hasOwnProperty('authors') ? authors.map(author => <div key={author} className="book-authors">{author}</div>) : <div></div>}
           </div>
         </li>
      );
   }
};

export default Book;
