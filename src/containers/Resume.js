import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import styled from 'styled-components/macro';
import { rgba } from 'polished';

import { SectionTitle, TitleSeparator, colors } from '../styles/theme';
import noiseBg from '../assets/black_noise_50.png';
import sectionBg from '../assets/resume-bg.jpg';

import pdfIcon from '../assets/file-pdf.svg';
import pdfFile from '../assets/201810_cv_davi_naizer.pdf';

const ResumeSection = styled.section`
    background-attachment: fixed;
    background-color: $eerie-black;
    background-image: linear-gradient(${rgba(colors.black, 0)}, ${rgba(colors.black, 1)}), url(${noiseBg}),
        url(${sectionBg});
    background-position: right top;
    background-repeat: no-repeat, repeat, no-repeat;
    background-size: auto, auto, cover;

    min-height: 100vh;
`;

// TODO separate as a Comp
const Timeline = styled.ul`
    list-style-type: none;
    padding: 0;
    position: relative;

    li {
        line-height: 200%;
    }

    &:before {
        content: ' ';
        background: ${colors.charcoal};
        display: inline-block;
        position: absolute;
        left: -1px;
        width: 2px;
        height: 100%;
        z-index: 400;
    }

    & > li {
        margin: 30px;
        padding-left: 0;
    }

    & > li:before {
        content: ' ';
        background: ${colors.darkVanilla};
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid ${colors.charcoal};
        left: -5px;
        width: 10px;
        height: 10px;
        z-index: 500;
        margin-top: 10px;
    }
`;
const DownloadButton = styled(Button)`
    padding: 10px 15px;

    img {
        margin-left: 15px;
        height: 20px;
    }
`;

const ResumeTitle = styled.h2`
    color: ${colors.sizzlingRed};
    font-weight: bold;
`;

const ResumeSubtitle = styled.span`
    color: ${colors.white};
    font-weight: bold;
`;

const Resume = () => (
    <ResumeSection id="resume">
        <Container>
            <Row>
                <Col lg="8">
                    <SectionTitle className="text-left">Resume</SectionTitle>
                    <TitleSeparator className="ml-0" />
                </Col>
            </Row>

            <Row>
                <Col lg="12">
                    {/* TODO separate as a Comp */}
                    <a href={pdfFile} target="_blank" rel="noopener noreferrer">
                        <DownloadButton className="secondary">
                            Download CV
                            <img src={pdfIcon} alt="Download Curriculum - PDF" />
                        </DownloadButton>
                    </a>
                </Col>
            </Row>

            <Row className="my-5">
                <Col lg="3">
                    <ResumeTitle>
                        work
                        <br />
                        experience
                    </ResumeTitle>
                </Col>

                <Col className="mx-auto">
                    <Timeline>
                        <li>
                            <p>
                                <ResumeSubtitle>
                                    2019-Present
                                    <br />
                                    FRONT-END DEVELOPER
                                </ResumeSubtitle>
                                <br />
                                Gamesys Group, UK, London
                            </p>
                        </li>
                        <li>
                            <p>
                                <ResumeSubtitle>
                                    2017-2019
                                    <br />
                                    FREELANCE E-LEARNING & FRONT-END DEVELOPER
                                </ResumeSubtitle>
                            </p>
                        </li>
                        <li>
                            <p>
                                <ResumeSubtitle>
                                    2009-2017
                                    <br />
                                    CO-FOUNDER & DEVELOPMENT MANAGER
                                </ResumeSubtitle>
                                <br />
                                UNBOX Learning Experience
                            </p>
                        </li>
                        <li>
                            <p>
                                <ResumeSubtitle>
                                    2007-2009
                                    <br />
                                    LEAD WEB DEVELOPER
                                </ResumeSubtitle>
                                <br />
                                GPAC Comunicação Integrada
                            </p>
                        </li>
                        <li>
                            <p>
                                <ResumeSubtitle>
                                    2005-2007
                                    <br />
                                    E-LEARNING DEVELOPER
                                </ResumeSubtitle>
                                <br />
                                HSBC Bank Brasil
                            </p>
                        </li>
                        <li>
                            <p>
                                <ResumeSubtitle>
                                    2001-2005
                                    <br />
                                    WEB/ACTIONSCRIPT DEVELOPER
                                </ResumeSubtitle>
                                <br />
                                GPAC Comunicação Integrada
                            </p>
                        </li>
                    </Timeline>
                </Col>
            </Row>

            <Row className="my-5">
                <Col lg="3">
                    <ResumeTitle>education</ResumeTitle>
                </Col>

                <Col className="mx-auto">
                    <Timeline>
                        <li>
                            <p>
                                <ResumeSubtitle>
                                    2007-2010
                                    <br />
                                    COMPUTER ENGINEERING
                                </ResumeSubtitle>
                                <br />
                                Positivo University, Brazil, Curitiba-Pr
                            </p>
                        </li>
                        <li>
                            <p>
                                <ResumeSubtitle>
                                    2005-2006
                                    <br />
                                    ELECTRICAL ENGINEERING
                                </ResumeSubtitle>
                                <br />
                                Positivo University, Brazil, Curitiba-Pr
                            </p>
                        </li>
                        <li>
                            <p>
                                <ResumeSubtitle>
                                    1997-2000
                                    <br />
                                    ELECTRONICS
                                </ResumeSubtitle>
                                <br />
                                Federal University of Technology - Brazil, Paraná (UTFPR)
                            </p>
                        </li>
                    </Timeline>
                </Col>
            </Row>

            <Row className="my-5">
                <Col lg="3">
                    <ResumeTitle>hard skills</ResumeTitle>
                </Col>

                <Col lg={{ size: 9, offset: 0 }}>
                    <ResumeSubtitle>PROGRAMMING/LANGUAGES</ResumeSubtitle>
                    <p>AS3, JS, HTML, CSS, SASS, PHP, Java, SQL, OOP, UML</p>
                </Col>

                <Col lg={{ size: 9, offset: 3 }}>
                    <ResumeSubtitle>FRAMEWORKS/LIBRARIES</ResumeSubtitle>
                    <p>BackboneJS, Bootstrap, React, Redux </p>
                </Col>

                <Col lg={{ size: 9, offset: 3 }}>
                    <ResumeSubtitle>DEV TOOLS/IDE</ResumeSubtitle>
                    <p>Sublime Text, VSCode, IntelliJ IDEA</p>
                </Col>

                <Col lg={{ size: 9, offset: 3 }}>
                    <ResumeSubtitle>DESIGN TOOLS</ResumeSubtitle>
                    <p>Photoshop, Illustrator, Flash/Animate, Adobe XD, Sketch, Zeplin</p>
                </Col>

                <Col lg={{ size: 9, offset: 3 }}>
                    <ResumeSubtitle>E-LEARNING TOOLS</ResumeSubtitle>
                    <p>Adobe Captivate, Articulate Storyline, Moodle LMS</p>
                </Col>

                <Col lg={{ size: 9, offset: 3 }}>
                    <ResumeSubtitle>VERSION CONTROL</ResumeSubtitle>
                    <p>SVN, GIT (Github, Bitbucket)</p>
                </Col>

                <Col lg={{ size: 9, offset: 3 }}>
                    <ResumeSubtitle>PROJECT TRACKING/MANAGEMENT</ResumeSubtitle>
                    <p>Trello, Toggl, JIRA, Microsoft Project, Merlin Project</p>
                </Col>
            </Row>

            <Row className="my-5">
                <Col lg="3">
                    <ResumeTitle>soft skills</ResumeTitle>
                </Col>

                <Col lg={{ size: 9, offset: 0 }}>
                    <ul>
                        <li>Flexibility</li>
                        <li>Communication</li>
                        <li>Teamworking</li>
                        <li>Self-Starter Attitude</li>
                        <li>Analytical and Problem Solver</li>
                        <li>Quality-oriented</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </ResumeSection>
);

export default Resume;
