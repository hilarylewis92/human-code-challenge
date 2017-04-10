import React, { Component } from 'react';

class FlickrList extends Component {
  render() {
    const { photos } = this.props
    const photo = photos.map(photo => {
      return (
        <li className='photo-list-item'
          key={photo.id}>
          <h2>{photo.title}</h2>
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
