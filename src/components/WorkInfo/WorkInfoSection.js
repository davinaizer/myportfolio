import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row, UncontrolledCarousel } from 'reactstrap';
import styled from 'styled-components/macro';

import { LinkList, TagList } from '..';
import { colors, SectionTitle, TitleSeparator } from '../../styles/theme';

//TODO improves how TagList is styled
const StyledTagList = styled.div`
    margin: 30px 0;

    ul li {
        color: ${colors.white};
        font-weight: bold;
        font-size: 70%;
        background-color: ${colors.sizzlingRed};
    }
`;

const Description = styled.p`
    margin: 60px 0;
`;

const Separator = styled.hr`
    border-color: ${colors.darkVanilla};
    margin: 60px auto;
`;

const Carousel = styled(UncontrolledCarousel)`
    margin: 60px 0;

    .carousel {
        &-indicators {
            bottom: -40px;

            li {
                background-color: $white;
                transition: 0.5s;
                width: 25px;
            }

            .active {
                background-color: ${colors.sizzlingRed};
            }
        }

        &-control-next {
            background: linear-gradient(to left, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
            transition: 0.5s;
            width: 10%;

            &-icon {
                height: 50px;
            }
        }

        &-control-prev {
            background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
            transition: 0.5s;
            width: 10%;
        }
    }
`;

const createMarkup = value => ({ __html: value });

const WorkInfoSection = ({ data }) => {
    const { title, description, images, links, tags } = data;

    const gallery = images.gallery.map(item => ({
        src: process.env.PUBLIC_URL + item,
        caption: ''
    }));

    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <Link to="/work">
                        <Button className="my-5" color="primary">
                            Back
                        </Button>
                    </Link>

                    <StyledTagList>
                        <TagList items={tags} />
                    </StyledTagList>
                </Col>

                <Col sm={12}>
                    <SectionTitle>{title}</SectionTitle>
                    <TitleSeparator className="ml-0" />

                    <Carousel items={gallery} />

                    <Description dangerouslySetInnerHTML={createMarkup(description)} />

                    <LinkList items={links} />
                </Col>

                <Col sm={12} className="text-center">
                    <Separator />
                    <Link to="/work">
                        <Button color="primary">Back</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

WorkInfoSection.propTypes = {
    data: PropTypes.shape({}).isRequired
};

export default WorkInfoSection;
