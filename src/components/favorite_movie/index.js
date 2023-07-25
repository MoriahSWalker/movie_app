import React from "react";
import "./style.css";

const FavoriteMovies = (props) => {
  let { movieArray } = props;
  console.log(movieArray);
  let arrayJSX = movieArray.map((title, index) => {
    return <div key={index}>{title}</div>;
  });
  return (
    <div className="favorites_list">
      <h1 className="favorites_title">Favorite Movies</h1>
      {arrayJSX}
    </div>
  );
};

export default FavoriteMovies;
