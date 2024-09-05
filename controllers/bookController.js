const { booksData, findBookById, likeBook, addComment } = require('../models/bookModel');

// Controller to render the homepage with all books
function renderBooksPage(req, res) {
    res.render('books', { books: booksData });
}

// Controller to render the specific book details page
function renderBookDetailPage(req, res) {
    const book = findBookById(req.params.id);
    if (book) {
        const viewName = book.title.toLowerCase(); // Use title to match the view (e.g. success.ejs, soul.ejs)
        res.render(viewName, { book });
    } else {
        res.status(404).send('Book not found');
    }
}

// Controller to handle liking a book
function likeBookController(req, res) {
    const book = likeBook(req.params.id);
    if (book) {
        res.json({ likes: book.likes });
    } else {
        res.status(404).send('Book not found');
    }
}

// Controller to handle adding a comment to a book
function addCommentController(req, res) {
    const book = addComment(req.params.id, req.body.comment);
    if (book) {
        res.json({ comments: book.comments });
    } else {
        res.status(404).send('Book not found');
    }
}

module.exports = {
    renderBooksPage,
    renderBookDetailPage,
    likeBookController,
    addCommentController
};
