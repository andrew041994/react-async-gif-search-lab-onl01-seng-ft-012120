import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {

    constructor() {
        super() 
        this.state = {
            images: []
        }
    }

    componentWillMount() {
        this.getData()
    }


   async getData(query) {
       let resp = await
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=3fI7z3WG1F4lTHQ6AVSPC6kXbzHfR0bX&rating=g&limit=3`)
       let data = await resp.json()
       let images = data.data
       this.setState({images:images})
         
    }

    handleSearch = (q) => {
        this.getData(q)
        
    }


render() {
    console.log(this.state.images[0])
    let images = this.state.images
        return (
            <div>
                <GifList images={images} />
                <GifSearch handleSearch={this.handleSearch} />
            </div>
         )
    }
}