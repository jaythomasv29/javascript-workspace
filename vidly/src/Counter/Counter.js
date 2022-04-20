import React, { Component } from "react";

class Counter extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidUpdate(prevProps, prevState) {
    // console.log("prevProps", prevProps);
    // console.log("prevState", prevState);
  }

  componentWillUnmount() {
    // console.log("Counter - unmounted");
  }

  render() {
    // console.log("Counter - rendered");
    return (
      <div className="row">
        <div className="col-2">
          <span
            className={`badge rounded-pill m-2 ${
              this.props.counter.value ? "bg-primary" : "bg-warning text dark"
            }`}
          >
            {this.props.counter.value ? this.props.counter.value : "Zero"}
          </span>
        </div>
        <div className="col">
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary m-2"
        >
          +
        </button>
        <button className="btn btn-secondary m-2" disabled={this.props.counter.value == 0 ? true : false} onClick={() => this.props.onDecrement(this.props.counter)}>-</button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          X
        </button>
        <button className="btn btn-primary" style={this.props.counter.liked ? { color: 'red' } : {}}  onClick={() => this.props.onLike(this.props.counter)}><i className="fa-solid fa-heart"></i></button >

        </div>
      </div>
    );
  }
}

export default Counter;
