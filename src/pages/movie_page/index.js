import React, { useState } from "react";
import Search from "../../components/search";
import DisplayMovie from "../../components/display_movie";
import FavoriteMovies from "../../components/favorite_movie";
import MovieRatings from "../../components/display_ratings";

const MoviePage = () => {
  // lifted state from search/index.js so it can be used for both search and display
  const [searchedMovie, setSearchedMovie] = useState(null);
  const [movieArray, setMovieArray] = useState([]);
  console.log({ searchedMovie });
  return (
    <div>
      {/* passing search state data via props to search/index.js */}
      <Search setSearchedMovie={setSearchedMovie} />
      <DisplayMovie
        searchedMovie={searchedMovie}
        movieArray={movieArray}
        setMovieArray={setMovieArray}
      />
      <MovieRatings searchedMovie={searchedMovie} />
      <FavoriteMovies movieArray={movieArray} />
    </div>
  );
};

export default MoviePage;
