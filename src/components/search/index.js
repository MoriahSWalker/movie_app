import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [searchString, setSearchString] = useState("");
  const [searchedMovie, setSearchedMovie] = useState(null);

  console.log(searchedMovie);

  // This function will handle our form input changes
  const handleChange = (e) => {
    console.dir(e.target.value);
    let newValue = e.target.value;
    setSearchString(newValue);
  };

  // This function will handle submit functionality
  // listen for submit and make call to server
  const handleSubmit = async (e) => {
    // if we dont prevent the default, the page will refresh
    e.preventDefault();
    // call express server with the string
    let serverResponse = await axios({
      method: "GET",
      url: `http://localhost:4000/get_movie/${searchString}`,
    });
    console.log(serverResponse);
    setSearchedMovie(serverResponse.data);
  };

  return (
    <section
      style={{
        borderBottom: "4px solid black",
        marginBottom: "20px",
        paddingBottom: "12px",
      }}
    >
      <h3>Search</h3>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="movie-search">
          Type the name of the movie you want to see!
        </label>
        <input
          type="text"
          name="movie-search"
          value={searchString}
          placeholder="movie name"
          onChange={(event) => handleChange(event)}
        />
        <button type="">Submit</button>
      </form>
    </section>
  );
};

export default Search;
