import React, { Component } from "react";

class Counter extends Component {
//   constructor(props) {
//     super(props);
//   }

  render() {

    return (
      <div>
        <span
          className={`badge rounded-pill m-2 ${
            this.props.counter.value ? "bg-primary" : "bg-warning text dark"
          }`}
        >
          {this.props.counter.value ? this.props.counter.value : 'Zero'}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary m-2"
        >
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger">
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
