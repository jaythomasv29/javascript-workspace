import React from "react";
import "./App.css";
import Counters from "./Counters/Counters";
import MovieList from "./MovieList/MovieList";
import Navbar from "./Navbar/Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("App constructor");

    this.state = {
      counters: [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ],
    };
  }

  componentDidMount() {
    console.log("App mounted");
  }

  handleDelete = (id) => {
    const counters = this.state.counters.filter((counter) => counter.id !== id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = [
      { id: 1, value: 4, liked: false},
      { id: 2, value: 0, liked: false},
      { id: 3, value: 0, liked: false},
      { id: 4, value: 0, liked: false},
    ];
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const { id } = counter;
    const newCounterObj = this.state.counters.map((c) => {
      if (id === c.id) {
        return { ...c, value: (c.value += 1) };
      } else {
        return c;
      }
    });
    this.setState({ counters: newCounterObj });
  };

  handleDecrement = (counter) => {
    const decreasedMapObjArr = this.state.counters.map((c) => {
      if (c.id === counter.id) {
        // decrement by returning an object with decreased value
        return { ...c, value: (c.value -= 1) };
      } else {
        // do nothing
        return c;
      }
    });
		// setState of newly decreased value
		this.setState({ counters: decreasedMapObjArr })
  };

	handleLike = (counter) => {
		console.log('liked');
		// like button to change object property to true
		const likedMapObjectArr = this.state.counters.map((c) => {
			if(c.id === counter.id) {
				return { ...c, liked: !c.liked}
			} else {
				return c
			}
		})
		this.setState({ counters : likedMapObjectArr})
	}

  render() {
    console.log("App rendered");
    return (
      <>
        <Navbar count={this.state.counters.length} />
        <main className="container">
          <h1>Vidly</h1>
          <MovieList />
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
						onLike={this.handleLike}
          />
        </main>
      </>
    );
  }
}

export default App;
