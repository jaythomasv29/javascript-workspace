import React from 'react';
import './App.css';
import Counters from './Counters/Counters';
import MovieList from './MovieList/MovieList';
import Navbar from './Navbar/Navbar';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    }
}

handleDelete = (id) => {
  const counters = this.state.counters.filter(counter => (
      counter.id !== id
  ))
  this.setState({ counters })
}

handleReset = () => {
  const counters = [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },

  ]
  this.setState({counters})
}

handleIncrement = (counter) => {
  const { id } = counter
  const newCounterObj = this.state.counters.map(c => {
      if (id === c.id){
          return {...c, value: c.value +=1 }
      } else {
          return c
      }
  })
   
  this.setState({counter: newCounterObj})
}

render(){
  return (
    <>
    <Navbar count={this.state.counters.length}/>
    <main className="container">

      <h1>Vidly</h1>
      <MovieList />
      <Counters 
        counters={this.state.counters}
        onDelete={this.handleDelete}
        onIncrement={this.handleIncrement}
        onReset={this.handleReset}

        />
    </main>
    </>
  
  );
}
}

export default App;
