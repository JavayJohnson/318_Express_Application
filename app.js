const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000; 


const {
    renderBooksPage,
    renderBookDetailPage,
    likeBookController,
    addCommentController
} = require('./controllers/bookController');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.redirect('/home');
});


app.get('/home', renderBooksPage);


app.get('/books/:id', renderBookDetailPage);


app.post('/books/:id/like', likeBookController);


app.post('/books/:id/comments', addCommentController);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
