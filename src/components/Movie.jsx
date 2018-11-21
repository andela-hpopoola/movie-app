import React from "react";
import PropTypes from "prop-types";

const Movie = ({ values }) => {
  const { title, release_date, vote_average, overview, poster_path } = values;
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={title} />
      <br />
      <strong>
        {title} ({release_date})
      </strong>
      <br />
      Imdb Rating: {vote_average} <br />
      Description:
      <br /> {overview} <br />
    </div>
  );
};

Movie.propTypes = {};

export default Movie;
