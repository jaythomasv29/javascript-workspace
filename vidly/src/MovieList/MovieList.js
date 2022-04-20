import React from "react";
import MovieItem from "../MovieItem/MovieItem";

import { getMovies, deleteMovie, movies } from "../services/fakeMovieService";
class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    const movies = getMovies().map(movie => {
      if(!movie.liked) {
        return {...movie, liked: false } 
      } else {
        return movie
      }
    })
    this.setState({
      movies: movies,
    });
  }

  handleDelete = (id) => {
    deleteMovie(id);
    this.setState({
      movies: getMovies(),
    });
  };

  handleLike = (id) => {
    console.log('liked');
    const objOfMovies = this.state.movies.map(movie => {
      if(movie._id === id) {
        return {...movie, liked: !movie.liked}
      } else {
        return movie
      }
    })
    this.setState({ movies: objOfMovies})
    
  }
  render() {
    return (
      <div>
        <p>Showing {this.state.movies.length} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie, idx) => (
              <MovieItem key={movie._id} movie={movie} onDelete={this.handleDelete} onLike={this.handleLike}/>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieList;
