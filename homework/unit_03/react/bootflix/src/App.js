import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import example from './omdbExample.json'
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movie: example
    }
  }

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  _searchByTitle = (req) => {
    axios.get("http://www.omdbapi.com/?apikey=d31f1a94&t="+req)
      .then((res) => {

        const movie = res.data;
        console.log("movie is " + movie);
        this.setState({movie: movie});
      })
  }

  _searchById = (req) => {
    axios.get("http://www.omdbapi.com/?i="+req)
      .then((res) => {
        const movie = res.data;
        console.log("movie is " + movie);
        this.setState({movie: movie});
      })
  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search searchByTitle={this._searchByTitle} searchById={this._searchById}/>
        <Movie movie={this.state.movie}/>
      </div>
    );
  }
}

export default App;
