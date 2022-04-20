import React, { Component } from 'react'
import Counter from '../Counter/Counter'
export default class Counters extends Component {
 
    render() {
        const {onReset, counters, onIncrement, onDelete} = this.props
        return (
            <div>
                <button onClick={onReset} className="btn btn primary m-2">Reset</button>
                {
                    counters.map(counter =>
                        <Counter key={counter.id} counter={counter} onDelete={onDelete} onIncrement={onIncrement}></Counter>

                    )
                }
            </div>
        )
    }
}
