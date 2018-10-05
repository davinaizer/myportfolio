import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Modal, WorkInfo, WorkList } from '../components';

import './Work.scss';

//TODO: move data to DB
//TODO: use Router to open selected item
const WorkData = require('./Work.json').data;

export default class Work extends Component {
  constructor(props) {
    super(props);

    this.sectionRef = React.createRef();
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
    this.setState(() => ({
      currentId: +id,
      isOpen: true,
    }));
  }

  closeModal() {
    document.body.classList.remove('modal-open');
    this.setState(() => ({
      isOpen: false,
    }));
  }

  render() {
    return (
      <section id="work" className="work-section" ref={this.sectionRef}>
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
