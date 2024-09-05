const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const {
    renderBooksPage,
    renderBookDetailPage,
    likeBookController,
    addCommentController
} = require('./controllers/bookController');

// Middleware to parse JSON bodies and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for homepage (redirects to /home)
app.get('/', (req, res) => {
    res.redirect('/home');
});

// Route to render homepage (all books)
app.get('/home', renderBooksPage);

// Route to render book details (success, soul, empowerment)
app.get('/books/:id', renderBookDetailPage);

// Route to like a book
app.post('/books/:id/like', likeBookController);

// Route to add a comment to a book
app.post('/books/:id/comments', addCommentController);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
});
