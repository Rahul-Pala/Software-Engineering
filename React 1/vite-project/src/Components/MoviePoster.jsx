import React from 'react'

function MoviePoster(props) {
  return (
    <div>
      <img src={props.poster}
      alt="Movie Poster">
      </img>
    </div>
  )
}

export default MoviePoster
