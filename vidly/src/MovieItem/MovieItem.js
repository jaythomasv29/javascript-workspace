import React from "react";
import Like from "../LikeButton/Like";

function MovieItem({ movie, onDelete, onLike }) {
  return (
    <tr>
      <td>{movie.title}</td>
      <td>{movie.genre.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dailyRentalRate}</td>
      <td><Like onLike={onLike} movie={movie}/></td>
      <td>
        <button
          onClick={() => onDelete(movie._id)}
          
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default MovieItem;
