import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  const allMovies = movies.map((movie, index) => {
    return <Movie key={index} values={movie} />;
  });
  return allMovies;
};

MovieList.propTypes = {};

export default MovieList;
