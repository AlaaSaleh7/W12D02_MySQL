const db = require('./db');

const newBook = (req,res)=>{
    const{title,author, published_at,price}=req.body;
    const query = `INSERT INTO books (title, author,published_at,price) VALUES (?, ?, ?, ?)`;
    const arr = [title,author, published_at,price];
    db.query(query, arr, (err, result) => {
        if (err) throw err;
    console.log('RESULT: ', result);
    res.json(result)
      });

}

const allBooks =(req,res)=>{
    const query = `SELECT * FROM books`;
    db.query(query, (err, result) => {
        if (err) throw err;
        console.log('RESULT: ', result);
        res.json(result)
      });
}
// practice Q1
const updateBook =(req,res)=>{
    const id =req.params.book_id;
    console.log(id);
    const { title, author, published_at, price } = req.body;
    const query = `UPDATE books SET title=?, author=?, published_at=?, price=?
    WHERE id=${id}`;
    //console.log(id);
    const arr = [title, author, published_at, price];
    db.query(query, arr, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
    
}
// practice Q2
const deleteBook =(req,res)=>{
    const id =req.params.book_id;
    const query = `DELETE FROM books 
    WHERE id =${id} `;
    db.query(query,(err, result) => {
        if (err) throw err;
        console.log('RESULT: ', result);
        res.json(result)
      });
    
}
// practice Q3
const orderBooks =(req,res)=>{
    const query = `SELECT * FROM books
    ORDER BY id DESC;`;
    db.query(query, (err, result) => {
        if (err) throw err;
        console.log('RESULT: ', result);
        res.json(result)
      });
}
// practice Q4
const nullPrice =(req,res)=>{
    const query = `SELECT * FROM books WHERE price is null;`;
    db.query(query, (err, result) => {
        if (err) throw err;
        console.log('RESULT: ', result);
        res.json(result)
      });
}
const allPrice =(req,res)=>{
    const query = `SELECT price FROM books WHERE price is not null;`;
    db.query(query, (err, result) => {
        if (err) throw err;
        console.log('RESULT: ', result);
        res.json(result)
      });
}

module.exports={
    newBook,
    allBooks,
    updateBook,
    deleteBook,
    orderBooks,
    nullPrice,
    allPrice
}