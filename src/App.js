import React, { Component } from "react";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
    this.getAllMovies = this.getAllMovies.bind(this);
  }

  searchMovie;

  getAllMovies(searchValue) {
    const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=f250169057aeeda23f31aace8ef2d93e&language=en-US&query=${searchValue}&page=1&include_adult=false`;
    fetch(searchURL)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState(() => ({ movies: myJson.results }));
      });
  }

  render() {
    return (
      <div className="App">
        <Search submitSearch={this.getAllMovies} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
