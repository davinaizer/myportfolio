import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../containers/Contact.scss';

import icon0 from '../img/social_envelope-square.svg';
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
            <Col className="my-5">
              <SocialIcon icon={icon0} href={'mailto:davi.naizer@gmail.com'} />
              <SocialIcon
                icon={icon1}
                href={'https://www.facebook.com/davi.naizer'}
              />
              <SocialIcon
                icon={icon2}
                href={'https://www.linkedin.com/in/davi-olcha-naizer-23b84b20'}
              />
              <SocialIcon icon={icon3} href={'https://github.com/davinaizer'} />
              <SocialIcon
                icon={icon4}
                href={'https://bitbucket.org/davi_naizer'}
              />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
