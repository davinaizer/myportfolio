import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components/macro';

import { colors } from '../styles/theme';

const TagListWrapper = styled.div``;

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

    ${({ size }) =>
        size === 'small' &&
        css`
            font-size: 8px;
        `}
`;

const TagList = ({ className, items, size }) => (
    <TagListWrapper className={className}>
        <TagListContainer>
            {items.map((item, index) => (
                <TagListItem key={index} size={size}>
                    {item}
                </TagListItem>
            ))}
        </TagListContainer>
    </TagListWrapper>
);

TagList.propTypes = {
    items: PropTypes.array
};

export default TagList;
