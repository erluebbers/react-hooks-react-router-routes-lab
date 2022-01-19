import React from "react";
import { directors } from "../data";

function Directors() {
  const displayDirectors = directors.map(director => {
    const movieList = director.movies.map(movie => {
      return <li key={movie}>{movie}</li>
    })

    return (
      <div key={director.name}>
        <h2>Name: {director.name}</h2>
        <p>Movies:</p>
        <ul>{movieList}</ul>
      </div>
    )
  })

  return (
  <div>
    <h1>Directors Page</h1>
    {displayDirectors}
  </div>
  );
}

export default Directors;
