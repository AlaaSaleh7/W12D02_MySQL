const express = require('express')
const app = express();
require('dotenv').config();
const connection = require("./db");
 const books = require("./books")
app.use(express.json());

app.post('/books',books.newBook);
app.get('/books',books.allBooks);
app.put('/books/:book_id',books.updateBook);
app.delete('/books/:book_id',books.deleteBook);
app.get('/order',books.orderBooks);
app.get('/price',books.nullPrice);
app.get('/price2',books.allPrice);

const PORT = 3000;
app.listen(PORT, () => {
  console.log('SERVER IS WORKING ON http://localhost:' + PORT);
});
