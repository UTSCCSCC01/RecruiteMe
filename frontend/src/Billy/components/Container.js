import React, { Component } from 'react';
import { Modal } from './Modal';
import Button from '@mui/material/Button';

export class Container extends Component {
  state = { isShown: false };
  showModal = () => {
    this.setState({ isShown: true });
  };
  closeModal = () => {
    this.setState({ isShown: false });
  };

  render() {
    return (
      <React.Fragment>
        <Button
            variant="contained"
            className="btn btnlg btn-danger center modal-button"
            onClick={this.showModal}
            sx={{backgroundColor: "#91A4E8"}}
        >Edit Profile</Button>
        {this.state.isShown ? (
          <Modal
            onSubmit={this.props.onSubmit}
            modalRef={(n) => (this.modal = n)}
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeModal}
            profile={this.props.profile}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Container;
