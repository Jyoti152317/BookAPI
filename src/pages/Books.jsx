import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Books = () => {

  const [books, setBooks] = useState([]);
  const [isLoading, setLaoding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, [])
  
  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/books');
      console.log(response)
      setBooks(response.data.books);
      setLaoding(false)
    }
    catch (err) {
      setError(err)
      console.log(err);
    }
   
  }

  const editBook = async (id) => {
    Navigate(`/books/${id}`)
  }

  const deleteBook = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/books/${id}`)
      setBooks(books.filter((book)=>book.id!=id))
    }
    catch (err) {
      console.log(err)
   }
  }

  return (
    <div>
      
      {
          books.map((book) => {
            return (
              <div key={book.id}>
                <img src={book.coverImage} />
                <h1>{book.name}</h1>
                <p>{book.category}</p>
                <button onClick={editBook}>Edit Book </button>
                <button onClick={()=>viewBookDetails(book.id)}>View Details</button>
                <button onClick={()=>deleteBook(book.id)}>Delete</button>
              </div>
            )
          })}
    </div>
  )
}

export default Books