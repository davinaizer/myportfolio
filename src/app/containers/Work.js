import React, { Component } from 'react';
import { Container } from 'reactstrap';

import Modal from '../components/Modal';
import WorkInfo from '../components/WorkInfo';
import WorkList from '../components/WorkList';

// ASSETS
import './Work.scss';

// change to data pulled from DB
const WorkData = require('./Work.json').data;

export default class Work extends Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      currentId: 0,
      isOpen: false,

    };
  }

  openModal(evt, id) {
    evt.preventDefault();

    document.body.classList.add('modal-open');
    this.setState(prevState => ({
      currentId: +id,
      isOpen: true,
    }));
  }

  closeModal() {
    document.body.classList.remove('modal-open');
    this.setState(prevState => ({
      isOpen: false,
    }));
  }

  render() {
    return (
      <section id="work" className="work-section">
        <Container>
          <div className="mb-5">
            <h2 className="section__title">Work</h2>
            <hr className="title__separator ml-0" />
          </div>

          <WorkList items={WorkData} onSelect={this.openModal} />
        </Container>

        <Modal show={this.state.isOpen} onClose={this.closeModal}>
          <WorkInfo data={WorkData[this.state.currentId]} />
        </Modal>
      </section>
    );
  }
}
