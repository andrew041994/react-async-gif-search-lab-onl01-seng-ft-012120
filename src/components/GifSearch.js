import React, { Component } from 'react';


export default class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            query: ""
        }
    }

    handleSubmmit = event => {
        event.preventDefault()
        this.props.handleSearch(this.state.query)
    }

    render() {
        return (
       <div>
           <form >
            <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
            <button onSubmit={this.handleSubmmit}>Find Gifs</button>

           </form>

       </div>
            )
    }
}