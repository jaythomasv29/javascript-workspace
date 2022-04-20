import React from "react";
import MovieItem from "../MovieItem/MovieItem";

import { getMovies, deleteMovie } from "../services/fakeMovieService";
class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    const movies = getMovies();
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
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie, idx) => (
              <MovieItem key={movie._id} movie={movie} handleDelete={this.handleDelete} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieList;
