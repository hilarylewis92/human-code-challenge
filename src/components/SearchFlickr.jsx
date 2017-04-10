import React, { Component } from 'react'
import axios from 'axios'

import FlickrList from './FlickrList'

class SearchFlickr extends Component {
  constructor() {
    super()
    this.state = {
      photos: null
    }
  }

  handleSubmit(e) {
    if(e.keyCode === 13) {
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f756f0c479cd4f73ea7a0b361c580cab&format=rest&tags=${e.target.value}&per_page=20&format=json&nojsoncallback=true`)
      .then(res => {
        const photos = res.data.photos.photo
        this.setState({
          photos
        })
      })
    }
  }


  render() {
    const { photos } = this.state

    return (
      <div className="SearchFlickr">
        <input className='search-flickr'
          type='text'
          placeholder='enter a keyword, then press enter'
          onKeyUp={(e) => this.handleSubmit(e)}/>
          {photos ?
            <FlickrList
              photos={photos}
            />
            : null
          }
      </div>
    )
  }
}

export default SearchFlickr
