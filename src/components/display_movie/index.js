import React from "react";

const DisplayMovie = (props) => {
  // pulled out prop
  let { searchedMovie, movieArray, setMovieArray } = props;
  console.log(searchedMovie, "From Display_Movie");

  const returnMovieJSX = () => {
    // our state in app.js searched movie is null, here we say if its not null we will display this
    if (searchedMovie !== null) {
      return (
        <div>
          <h3>Movie Display</h3>
          <h4>{searchedMovie.Title}</h4>
          <p>{searchedMovie.Plot}</p>
          {/* check if movie posterURL exists */}
          {searchedMovie.Poster.toLowerCase() === "n/a" ? (
            <div></div>
          ) : (
            <img src={searchedMovie.Poster} alt="" />
          )}
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
  return (
    <section
      style={{
        borderBottom: "4px solid black",
        marginBottom: "20px",
        paddingBottom: "12px",
      }}
      onClick={() => handleClick()}
    >
      {returnMovieJSX()}
    </section>
  );
};

export default DisplayMovie;
