import React from 'react'
import MovieDetails from './MovieDetails'
import MoviePoster from './MoviePoster'
import MovieTitle from './MovieTitle'

function MovieCard(props) {
  return (
    <div>
      <MovieTitle title={props.movie.title}></MovieTitle>
      <MovieDetails year={props.movie.year} 
      rating={props.movie.rating}></MovieDetails>
      <MoviePoster poster={props.movie.poster}></MoviePoster>
    </div>
  )
}

export default MovieCard
