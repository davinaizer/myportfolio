import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { rgba } from 'polished';


import filterByIdAction from '../../actions/filterAction';
import noiseBg from '../../assets/black_noise_50.png';
import sectionBg from '../../assets/work-bg.jpg';
import { colors } from '../../styles/theme';
import WorkInfoSection from './WorkInfoSection';

const WorkInfoContainer = styled.section`
    background-image: linear-gradient(${rgba(colors.black, 0)}, ${rgba(colors.black, 1)}), url(${noiseBg}),
        url(${sectionBg});
    background-position: center top;
    background-repeat: no-repeat, repeat, no-repeat;
    background-size: auto, auto, cover;
`;

const WorkInfo = ({ match }) => {
    const dispatch = useDispatch();
    const filteredWorks = useSelector(state => state.filter.works);

    useEffect(() => {
        dispatch(filterByIdAction(match.params.id));
    }, [dispatch, match.params.id]);

    return (
        <WorkInfoContainer id="work-info">
            {filteredWorks.length >= 1 && <WorkInfoSection data={filteredWorks[0]} />}
        </WorkInfoContainer>
    );
};

WorkInfo.propTypes = {
    match: PropTypes.shape({}).isRequired
};

export default WorkInfo;
