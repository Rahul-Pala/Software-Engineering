import React from 'react'

function MovieDetails(props) {
  return (
    <div>
      Year: {props.year}
      Rating: {props.rating}
    </div>
  )
}

export default MovieDetails
