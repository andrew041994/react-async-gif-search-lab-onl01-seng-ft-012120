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

    componentDidMount() {
        this.getData()
    }


    getData = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
          .then(res => res.json())
          .then(({data}) => {
            this.setState({ images: data.map( gif => ({ url: gif.images.original.url }) ) })
          })
      }
    

  


render() {
    console.log(this.state.images[0])
    let images = this.state.images
        return (
            <div>
                <GifList images={images} />
                <GifSearch getData={this.getData} />
            </div>
         )
    }
}