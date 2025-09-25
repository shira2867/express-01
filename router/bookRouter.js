const express=require("express");
const { v4: uuidv4 } = require('uuid');
const router = express.Router();



let books=[ { id: uuidv4(), title: 'mekimi' },
  { id: uuidv4(), title: 'shira chadasha' }]


// 1. Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// 2. Get book by id
router.get('/:id', (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.json(book);
});    


// 3. Post a new book
router.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }
  const newBook = { id: uuidv4(), title };
  books.push(newBook);
  res.status(201).json(newBook);
});

// 4.  edit book by id
router.put('/:id', (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  const { title } = req.body;
  if (title) book.title = title;
  res.json(book);
});


// 5. Delete a book by id
router.delete('/:id', (req, res) => {
  const index = books.findIndex(b => b.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }
  const deleted = books.splice(index, 1);
  res.json(deleted[0]);
});

module.exports = router;