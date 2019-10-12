import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import { WorkList } from '../components';

import './Work.scss';

const Work = () => {
    const workList = useSelector(state => state.config.workList);

    return (
        <section id="work" className="work-section">
            <Container>
                <div className="mb-5">
                    <h2 className="section__title">Work</h2>
                    <hr className="title__separator ml-0" />
                </div>
                <WorkList items={workList} />
            </Container>
        </section>
    );
};

export default Work;
