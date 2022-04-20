import React, { Component } from 'react'
import Counter from '../Counter/Counter'
export default class Counters extends Component {
 
    render() {
        return (
            <div>
                <button onClick={this.props.onReset} className="btn btn primary m-2">Reset</button>
                {
                    this.props.counters.map(counter =>
                        <Counter key={counter.id} counter={counter} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement}></Counter>

                    )
                }
            </div>
        )
    }
}
