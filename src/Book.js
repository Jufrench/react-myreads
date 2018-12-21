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
             {/* The code block below maps over the authors array. It makes a div displaying
                each author of each book. Some books have more than 1 author. The authors array
                is a property of each book in the books array.
             */}
               {/*{authors.map(author => <div key={author} className="book-authors">{author}</div>)}*/}
           </div>
         </li>
      );
   }
};

export default Book;
