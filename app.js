const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

let booksData = [
    { id: 1, title: 'Success', likes: 0, comments: [] },
    { id: 2, title: 'Soul', likes: 0, comments: [] },
    { id: 3, title: 'Empowerment', likes: 0, comments: [] }
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.render('books', { books: booksData });
});

app.get('/books/:id', (req, res) => {
    const bookItem = booksData.find(book => book.id === parseInt(req.params.id));
    if (bookItem) {
        const viewName = bookItem.title.toLowerCase();
        res.render(viewName, { book: bookItem });
    } else {
        res.status(404).send('Item not found');
    }
});

app.post('/books/:id/like', (req, res) => {
    const bookItem = booksData.find(book => book.id === parseInt(req.params.id));
    if (bookItem) {
        bookItem.likes = (bookItem.likes || 0) + 1;
        res.json({ likes: bookItem.likes });
    } else {
        res.status(404).send('Item not found');
    }
});

app.post('/books/:id/comments', (req, res) => {
    const bookItem = booksData.find(book => book.id === parseInt(req.params.id));
    if (bookItem) {
        bookItem.comments = bookItem.comments || [];
        bookItem.comments.push(req.body.comment);
        res.json({ comments: bookItem.comments });
    } else {
        res.status(404).send('Item not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
});
