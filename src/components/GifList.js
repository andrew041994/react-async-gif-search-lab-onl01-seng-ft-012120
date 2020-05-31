import React, { Component } from 'react';

export default class GifList extends Component {

    render(){
        return(
          <div>
            <ul>
              {this.props.images.map(gif => <li><img key={gif.title} src={gif.url} alt="gif"/></li>)}
            </ul>
          </div>
        )
      }

}

