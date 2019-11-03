import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components/macro';

import { SocialIcon } from '../components';
import { Section, SectionTitle, TitleSeparator } from '../styles/theme';

import sectionBg from '../assets/contact-bg.jpg';
import icon0 from '../assets/social_envelope-square.svg';
import icon1 from '../assets/social_facebook.svg';
import icon2 from '../assets/social_linkedin.svg';
import icon3 from '../assets/social_github.svg';

const ContactSection = styled(Section)`
    min-height: 100vh;
    padding: 10rem 0;
`;

const Contact = () => (
    <ContactSection backgroundImage={sectionBg}>
        <Container>
            <Row>
                <Col lg="8" className="">
                    <SectionTitle>Contact</SectionTitle>
                    <TitleSeparator className="ml-0" />
                    <p className="lead">If you want to reach me, feel free to email me or check my social profiles.</p>
                </Col>
            </Row>

            <Row>
                <Col className="my-5">
                    <SocialIcon icon={icon0} href={'mailto:davi.naizer@gmail.com'} />
                    <SocialIcon icon={icon1} href={'https://www.facebook.com/davi.naizer'} />
                    <SocialIcon icon={icon2} href={'https://www.linkedin.com/in/davi-naizer'} />
                    <SocialIcon icon={icon3} href={'https://github.com/davinaizer'} />
                </Col>
            </Row>
        </Container>
    </ContactSection>
);

export default Contact;
