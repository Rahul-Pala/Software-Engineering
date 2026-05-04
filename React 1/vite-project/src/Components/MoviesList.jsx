import Movie from "./Movie";

function MoviesList() {
// collection of objects representing movies
const movies = [
{
title: "The Shawshank Redemption",
year: 1994,
synopsis: "Two imprisoned men find redemption.",
},
{
title: "The Dark Knight",
year: 2008,
synopsis: "Batman fights the menace known as the Joker.",
},
{
title: "Interstellar",
year: 2014,
synopsis: "Explorers travel through a wormhole in space.",
},
];
return (
<div>
      <h2>Movies List</h2>

      <ul>
        {movies.map(movie => (
          <Movie
            key={movie.id}   // ✅ IMPORTANT (from page 46)
            titlee={movie.title}
            yearr={movie.year}
            synopsiss={movie.synopsis}
          />
        ))}
      </ul>

    </div>
)
}
export default MoviesList;