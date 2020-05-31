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
        this.props.getData(this.state.query)
    }

    render() {
        return (
       <div>
           <form onSubmit={this.handleSubmmit} >
            <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
          

           </form>

       </div>
            )
    }
}