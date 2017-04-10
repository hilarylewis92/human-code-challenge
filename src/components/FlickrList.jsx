import React, { Component } from 'react';

class FlickrList extends Component {
  render() {
    const { photos } = this.props
    const photo = photos.map(photo => {
      return (
        <li className='photo-list-item'
          key={photo.id}>
          <h2>{photo.title}</h2>
          <img
            src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_t.jpg`}
          />
        </li>
      )
    })

    return (
      <div className="FlickrList">
        <h2>List</h2>
        <ul>{photo}</ul>
      </div>
    );
  }
}

export default FlickrList;
