import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [isLoading, setLaoding] = useState(true);
    const [error, setError] = useState(null);
    
console.log(book)
    useEffect(() => {
        const fetchBooks = async () => {
            try {
              const response = await axios.get(`http://localhost:5000/books/${id}`);
              console.log(response)
              setBook(response.data);
              setLaoding(false)
            }
            catch (err) {
              setError(err)
              console.log(err);
            }
           
          }
    fetchBooks();
  }, [id])
  
 
  return (
      <div>
          {/* {console.log(book)} */}
          <h1>{book.name}</h1>
          <img src={book.coverImage} />
          <p>{book.category}</p>
          <p>{book.price}</p>
          <p>{book.author}</p>
          <p>{book.publishingYear}</p>
          <p>{book.description}</p>
    </div>
  )
}

export default BookDetail