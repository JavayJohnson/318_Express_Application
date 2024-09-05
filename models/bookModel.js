// Simulated book data
let booksData = [
    { id: 1, title: 'Success', likes: 0, comments: [] },
    { id: 2, title: 'Soul', likes: 0, comments: [] },
    { id: 3, title: 'Empowerment', likes: 0, comments: [] }
];

// Function to find a book by ID
function findBookById(id) {
    return booksData.find(book => book.id === parseInt(id));
}

// Function to add a like to a book
function likeBook(id) {
    const book = findBookById(id);
    if (book) {
        book.likes = (book.likes || 0) + 1;
        return book;
    }
    return null;
}

// Function to add a comment to a book
function addComment(id, comment) {
    const book = findBookById(id);
    if (book) {
        book.comments = book.comments || [];
        book.comments.push(comment);
        return book;
    }
    return null;
}

module.exports = {
    booksData,
    findBookById,
    likeBook,
    addComment
};
