# MyReads

Welcome to the MyReads app!

## Getting Started

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Explanation

##### Home Page
* This page displays 3 shelves on the home page
   * Currently Reading
   * Want to Read
   * Read
* Each book has a button, that when clicked displays dropdown options. The dropdown options allow users to change the book upon which the shelf belongs.

##### Search Page
* This page can be access by clicking on the circular button in the bottom right corner.
* Users then search for a title, author, or topic
* To return to the home page, click on the back arrow in the search bar.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which are the following:

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'

The list of terms are the **only** terms that will work with the backend, so don't be surprised if your searches for Axolotl don't return any results.


 ## Create React App
 This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
