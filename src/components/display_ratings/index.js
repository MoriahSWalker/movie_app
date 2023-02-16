import React from "react";

const MovieRatings = (props) => {
  let { searchedMovie } = props;
  console.log("Movie Ratings Component", searchedMovie);

  const returnLoader = () => {
    return <div>loading...</div>;
  };

  const returnMovieRatings = () => {
    let movieRatingsJSX = searchedMovie.Ratings.map((item, index) => {
      return (
        <div key={index}>
          <h4> {item.Source} </h4>
          <h5> {item.Value}</h5>
        </div>
      );
    });

    return movieRatingsJSX;
  };

  return (
    <div>
      <h1>Movie Ratings</h1>
      {searchedMovie === null ? returnLoader() : returnMovieRatings()}
    </div>
  );
};

export default MovieRatings;
