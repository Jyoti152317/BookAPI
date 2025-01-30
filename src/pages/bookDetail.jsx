import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const BookDetail = () => {

    const [book, setBook] = useState();
    const { id } = useParams();
  return (
      <div>
          <img src={book.coverImage} />
          <h1>{book.name}</h1>
          <p>{book.category}</p>
          <p>{book.price}</p>
          <p>{book.author}</p>
          <p>{book.publishingYear}</p>
          <p>{book.description}</p>
    </div>
  )
}

export default BookDetail