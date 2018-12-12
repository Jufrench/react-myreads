import React, { Component } from 'react';

class Book extends Component {
   state = { currentShelf: this.props.shelf };

   componentDidMount() {
      console.log(this.state);
   }

   bookStyle = {
      width: 128,
      height: 193,
      backgroundImage: `url(${this.props.bookCover})`
   };

   handleShelfChange = (event) => {
      console.log(event.target.value);
      // this.setState({ currentShelf: event.target.value });
      // this.setState(prevState => ({ currentShelf: event.target.value }));
      console.log(this.state);
   }

   render() {
      return (
         <li>
           <div className="book">
             <div className="book-top">
               <div className="book-cover" style={this.bookStyle}>
               </div>
               <div className="book-shelf-changer">
                 <select onChange={this.handleShelfChange}>
                   <option value="move" disabled>Move to...</option>
                   <option value="currentlyReading">Currently Reading</option>
                   <option value="wantToRead">Want to Read</option>
                   <option value="read">Read</option>
                   <option value="none">None</option>
                 </select>
               </div>
             </div>
             <div className="book-title">{this.props.title}</div>
             {/* The code block below maps over the authors array. It makes a div displaying
                each author of each book. Some books have more than 1 author. The authors array
                is a property of each book in the books array.
             */}
             {this.props.authors.map(author => <div key={author} className="book-authors">{author}</div>)}
           </div>
         </li>
      );
   }
};

export default Book;
