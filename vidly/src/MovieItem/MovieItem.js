import React from "react";

function MovieItem({ movie, handleDelete }) {
  return (
    <tr>
      <td>{movie.title}</td>
      <td>{movie.genre.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dailyRentalRate}</td>
      <td>
        <button
          onClick={() => handleDelete(movie._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default MovieItem;
