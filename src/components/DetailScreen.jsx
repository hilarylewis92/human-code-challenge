import React, { Component } from 'react'
import Modal from 'boron/DropModal'
import axios from 'axios'
import moment from 'moment'

class DetailScreen extends Component {
  constructor() {
    super()
    this.state = {
      photo: null
    }
  }

  showModal(){
    this.refs.modal.show()
    this.getInfo()
  }

  hideModal(){
      this.refs.modal.hide()
  }

  getInfo() {
    const { i, photos } = this.props

    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=f756f0c479cd4f73ea7a0b361c580cab&photo_id=${photos[i].id}&secret=${photos[i].secret}&format=json&nojsoncallback=1`)
    .then(res => {
      const { photo } = res.data
      this.setState({
        photo
      })
    })
  }


  formatDate(date) {
    return moment(date).format('MMM Do YYYY')
  }

  render() {
    const { i, photos } = this.props
    const { photo } = this.state

    return (
      <Modal
        ref="modal"
        className='modal'>
        {photo ?
          <div>
            <h2>{photo.title._content}</h2>
            <img
              src={`https://farm${photos[i].farm}.staticflickr.com/${photos[i].server}/${photos[i].id}_${photos[i].secret}.jpg`}
              />
            <p>{photo.description._content}</p>
            <p>{photo.dateuploaded}</p>
          </div>
        : null}
      </Modal>
    )
  }
}

export default DetailScreen
