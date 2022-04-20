import React, { Component } from 'react'
import Counter from '../Counter/Counter'
export default class Counters extends Component {

    render() {
        console.log('Counters - rendered');
        const { onReset, counters, onIncrement, onDecrement, onDelete, onLike } = this.props
        return (
            <div>
                <button onClick={onReset} className="btn btn primary m-2">Reset</button>
                {
                    counters.map(counter =>
                        <Counter key={counter.id} 
                            counter={counter} 
                            onDelete={onDelete} 
                            onIncrement={onIncrement} 
                            onDecrement={onDecrement}
                            onLike={onLike}
                        ></Counter>

                    )
                }
            </div>
        )
    }
}
