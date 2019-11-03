import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'reactstrap';

import { WorkList } from '../components';
import { Section, SectionTitle, TitleSeparator } from '../styles/theme';

import sectionBg from '../assets/work-bg.jpg';

const Work = () => {
    const workList = useSelector(state => state.config.workList);

    return (
        <Section backgroundImage={sectionBg}>
            <Container>
                <SectionTitle>Work</SectionTitle>
                <TitleSeparator className="ml-0" />
                <WorkList className="mt-5" items={workList} />
            </Container>
        </Section>
    );
};

export default Work;
