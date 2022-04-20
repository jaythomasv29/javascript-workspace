import React from 'react'

export default function Like({movie, onLike}) {
    
  return (
    <button 
        onClick={() => onLike(movie._id) } 
        className="btn btn-primary" 
        style={ movie.liked ? {color: 'red'} : {} }
        >
            <i className="fa-solid fa-heart"></i>
    </button>
  )
}
