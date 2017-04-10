import React, { Component } from 'react'
import Modal from 'boron/DropModal'

import DetailScreen from './DetailScreen'

class FlickrList extends Component {
  constructor() {
    super()
      this.state = {
        currentIndex: 0,
      }
    }

  showDetailModal(i){
    this.setState ({
      currentIndex: i
    })
    this.refs.modal.showModal()
  }

  render() {
    const { currentIndex } = this.state
    const { photos } = this.props

    const photo = photos.map((photo, i) => {
      return (
        <li className='photo-list-item'
          key={photo.id}
          id={i}
          onClick={() => this.showDetailModal(i)}>
          <h3>{photo.title}</h3>
          <img
            src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_t.jpg`}
          />
        </li>
      )
    })

    return (
      <div className="FlickrList">
        <ul>{photo}</ul>
        <DetailScreen
          ref='modal'
          i={currentIndex}
          photos={photos}
        />
      </div>
    )
  }
}

export default FlickrList
