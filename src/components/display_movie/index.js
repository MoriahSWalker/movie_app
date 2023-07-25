import React from "react";
import "./style.css";

const DisplayMovie = (props) => {
  // pulled out prop
  let { searchedMovie, movieArray, setMovieArray } = props;
  console.log(searchedMovie, "From Display_Movie");

  const returnMovieJSX = () => {
    // our state in app.js searched movie is null, here we say if its not null we will display this
    if (searchedMovie !== null) {
      return (
        <div className="movie-wrapper">
          {/* <h3>Movie Display</h3> */}
          <div className="movie-data">
            <h2>{searchedMovie.Title}</h2>
            <div className="year-rate-time">
              <p>{searchedMovie.Year}</p>
              <p>{searchedMovie.Rated}</p>
              <p>{searchedMovie.Runtime}</p>
            </div>
          </div>
          {/* check if movie posterURL exists */}
          {searchedMovie.Poster.toLowerCase() === "n/a" ? (
            <div></div>
          ) : (
            <img src={searchedMovie.Poster} alt="" />
          )}
          {/* code for col 2 */}
          <div className="col-2">
            <p className="plot">"{searchedMovie.Plot}"</p>
            <div className="film-makers">
              <div className="director-div">
                <p><strong>Director</strong></p>
                <p>{searchedMovie.Director}</p>
              </div>
              <div className="actors-div">
                <p><strong>Actors</strong></p>
                <p>{searchedMovie.Actors}</p>
              </div>
            </div>
          </div>
          
        </div>
      );
      // if it is null we display this
    } else {
      return <div>waiting for movie...</div>;
    }
  };
  // returns our returnJSX function
  const handleClick = () => {
    console.log("clicked");
    // add title of current movie to that array (push it)
    // this if check ensure we do not add same movie twice to favorite movies
    if (!movieArray.includes(searchedMovie.Title)) {
      setMovieArray([...movieArray, searchedMovie.Title]);
    }
  };
  return <section onClick={() => handleClick()}>{returnMovieJSX()}</section>;
};

export default DisplayMovie;
