import React from 'react'

function BooksList(props) {
  return (

      <ol>

        {props.books.map(book => (
          <li key={book}>{book}</li>
        ))}

      </ol>

    
  )
}

export default BooksList
