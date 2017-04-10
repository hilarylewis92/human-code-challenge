import React, { Component } from 'react';
import Modal from 'boron/DropModal'

class DetailScreen extends Component {
  showModal(){
      this.refs.modal.show();
  }
  hideModal(){
      this.refs.modal.hide();
  }

  render() {
    return (
      <Modal
        ref="modal">
        <h2>I am a dialog</h2>
      </Modal>
    );
  }
}

export default DetailScreen;
