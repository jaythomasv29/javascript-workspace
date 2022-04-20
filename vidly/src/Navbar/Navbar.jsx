import React, { Component } from 'react'

export default class Navbar extends Component {
    
    render() {
        return (

            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <span className="navbar-brand mb-0 h1">Navbar <span className="badge badge-pill badge-primary">Total Counters: {this.props.count}</span></span>
                    
                </div>
            </nav>
        )
    }
}
