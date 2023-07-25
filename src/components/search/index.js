import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./style.css";

// accepting props from app.js for searchedMovie
const Search = (props) => {
  let setSearchedMovie = props.setSearchedMovie;
  let isFirstRender = useRef(true);
  const [searchString, setSearchString] = useState("");
  const movieNames = [
    "The Menu",
    "Friday",
    "Mulan",
    "Save The Last Dance",
    "Toy Story",
    "Encanto",
    "The Matrix",
    "The Fifth Element",
    "Juno",
    "Hook",
  ];
  useEffect(() => {
    if (isFirstRender.current === true) {
      console.log("making api call");
      isFirstRender.current = false;
      // make this movie call randomly choose btwn 10 movies
      makeServerCall(movieNames[Math.floor(Math.random() * movieNames.length)]);
    }
  }, []);
  // This function will handle our form input changes
  const handleChange = (e) => {
    console.dir(e.target.value);
    let newValue = e.target.value;
    setSearchString(newValue);
  };

  const makeServerCall = async (string) => {
    let serverResponse = await axios({
      method: "GET",
      url: `/get_movie/${string}`,
    });
    console.log(serverResponse);
    // clears search to empty
    setSearchString("");
    // calling data from app.js
    setSearchedMovie(serverResponse.data);
  };
  // This function will handle submit functionality
  // listen for submit and make call to server
  const handleSubmit = (e) => {
    // if we dont prevent the default, the page will refresh
    e.preventDefault();
    // call express server with the string
    makeServerCall(searchString);
  };

  // return is where the display happens
  return (
    <section className="header">
      <a href="#">
        <span>MooovieDb</span>
      </a>
      <div className="search">
        <form onSubmit={(event) => handleSubmit(event)}>
          <label htmlFor="movie-search">Find A Film</label>
          <input
            type="text"
            name="movie-search"
            value={searchString}
            placeholder=" search"
            onChange={(event) => handleChange(event)}
          />
          {/* <button type="">Submit</button> */}
        </form>
      </div>
      
    </section>
  );
};

export default Search;
