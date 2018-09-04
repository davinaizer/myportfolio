import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import '../containers/Contact.scss';

import icon1 from '../img/social_facebook.svg';
import icon2 from '../img/social_linkedin.svg';
import icon3 from '../img/social_github.svg';
import icon4 from '../img/social_bitbucket.svg';

import SocialIcon from '../components/SocialIcon';

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="contact" className="contact-section">
        <Container>
          <Row>
            <Col lg="8" className="">
              <h2 className="section__title text-left">Contact</h2>
              <hr className="title__separator ml-0" />
              <p className="lead">
                If you want to reach me, feel free to email me or check my
                social profiles.
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <SocialIcon src={icon1} href={'/facebook'} />
              <SocialIcon src={icon2} href={'/linkedin'} />
              <SocialIcon src={icon3} href={'/github'} />
              <SocialIcon src={icon4} href={'/bitbucket'} />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
