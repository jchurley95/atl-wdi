import React, { Component } from "react";

// Update this Movie component with info from OMDB
// BONUS: Use OMDB's Poster API to add a poster to each movie.
class Movie extends Component {
  render () {
    return (
      <section id="movie-listing">
        <div className="movie">
          <h3>Title: {this.props.Title}</h3>
          <p>
            <strong>Released:</strong> {this.props.Year}<br />
            <strong>Directed By:</strong> {this.props.Director}<br />
            <em>Genre:</em> {this.props.Genre}
          </p>
          <p>Plot: {this.props.Plot}</p>
        </div>
      </section>
    );
  }
};

export default Movie;


