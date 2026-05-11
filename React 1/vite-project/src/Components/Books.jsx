import React from 'react'
import BooksList from './BooksList'

function Books() {
    
let books = ['Money Magnet', 'Think & grow rich']
  return (
      <BooksList books={books}></BooksList>
    
  )
}

export default Books
