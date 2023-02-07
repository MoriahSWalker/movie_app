import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [searchString, setSearchString] = useState("");

  const handleChange = (e) => {
    console.dir(e.target.value);
    let newValue = e.target.value; // What the element value WOULD BE after the change
    // was t
    // e.target.value is th
    setSearchString(newValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitting!");
    let returnedData = await axios({
      method: "GET",
      path: `http://localhost:5000/get_movie/?${searchString}`,
    });
    console.log(returnedData);
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
      <form>
        <label htmlFor="movie-search">
          Type the name of the movie you want to see!
        </label>
        <input
          type="search"
          name="movie-search"
          value={searchString}
          placeholder="movie name"
          onChange={(event) => handleChange(event)}
        />
      </form>
    </section>
  );
};

export default Search;
