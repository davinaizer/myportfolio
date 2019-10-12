import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, UncontrolledCarousel } from 'reactstrap';
import { TagList, LinkList } from './';

import filterByIdAction from '../actions/filterAction';

import './WorkInfo.scss';

const WorkInfo = ({ match }) => {
    const dispatch = useDispatch();
    const filteredWorks = useSelector(state => state.filter.works);

    useEffect(() => {
        dispatch(filterByIdAction(match.params.id));
    }, [dispatch, match.params.id]);

    const createMarkup = value => ({ __html: value });

    const getWorkSection = workItem => {
        const { title, description, images, links, tags } = workItem;
        const publicPatch = process.env.NODE_ENV === 'production' ? '/react-portfolio' : '';
        const gallery = images.gallery.map(item => ({
            src: publicPatch + item,
            caption: '',
        }));

        return (
            <Container className="work-info">
                <Row>
                    <Col sm={12} className="work__header">
                        <div className="my-5">
                            <Link to={'/work'}>
                                <Button color="primary">Back</Button>
                            </Link>
                        </div>
                        <TagList items={tags} />
                    </Col>

                    <Col sm={12}>
                        <h2 className="section__title">{title}</h2>
                        <hr className="title__separator ml-0" />
                        <UncontrolledCarousel className="work-info__gallery" items={gallery} />
                        <div className="work-info__description">
                            <p dangerouslySetInnerHTML={createMarkup(description)} />
                        </div>
                        <LinkList className="work-info__links" items={links} />
                    </Col>

                    <Col sm={12} className="work-info__footer text-center">
                        <hr />
                        <Link to={'/work'}>
                            <Button className="" color="primary">
                                Back
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        );
    };

    return (
        <section id="work-info" className="work-info-section">
            {filteredWorks.length >= 1 && getWorkSection(filteredWorks[0])};
        </section>
    );
};

WorkInfo.propTypes = {
    match: PropTypes.shape({}).isRequired,
};

export default WorkInfo;
