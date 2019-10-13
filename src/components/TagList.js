import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/macro';

import { colors } from '../styles/theme';

const TagListContainer = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const TagListItem = styled.li`
    background-color: ${colors.jungleGreen};
    display: inline-block;
    font-size: 10px;
    margin-top: 5px;
    margin-right: 5px;
    padding: 5px 10px;
    text-transform: uppercase;
`;

const TagList = ({ items }) => (
    <TagListContainer>
        {items.map((item, index) => (
            <TagListItem key={index}>{item}</TagListItem>
        ))}
    </TagListContainer>
);

TagList.propTypes = {
    items: PropTypes.array
};

export default TagList;
