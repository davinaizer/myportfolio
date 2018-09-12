import React, {Component} from 'react';
import {Button} from 'reactstrap';

import './Modal.scss';

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown, false);
  }

  onKeyDown(e) {
    // ESC KEY press check
    if (e.keyCode === 27) {
      this.props.onClose();
    }
  }

  render() {
    const {
      show,
      onClose,
      children
    } = this.props;

    if (!show) {
      return null;
    }

    return (
      <div className="app-modal">
        <Button className="app-modal__close" color="primary" onClick={onClose}>
          Close
        </Button>
        {children}
      </div>
    );
  }
}
