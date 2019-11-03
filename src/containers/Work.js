import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import styled from 'styled-components/macro';
import { rgba } from 'polished';

import { WorkList } from '../components';
import { colors } from '../styles/theme';
import noiseBg from '../assets/black_noise_50.png';
import sectionBg from '../assets/work-bg.jpg';

const WorkSection = styled.section`
    background-attachment: fixed;
    background-image: linear-gradient(${rgba(colors.black, 0)}, ${rgba(colors.black, 1)}), url(${noiseBg}),
        url(${sectionBg});

    background-position: center top;
    background-repeat: no-repeat, repeat, no-repeat;
    background-size: auto, auto, cover;
`;

const Work = () => {
    const workList = useSelector(state => state.config.workList);

    return (
        <WorkSection id="work">
            <Container>
                <div className="mb-5">
                    <h2 className="section__title">Work</h2>
                    <hr className="title__separator ml-0" />
                </div>
                <WorkList items={workList} />
            </Container>
        </WorkSection>
    );
};

export default Work;
