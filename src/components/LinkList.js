// FSC
import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

/* STYLED COMPONENTS */
const LinkListContainer = styled.div``;

const LinkButton = styled(Button)`
    margin-right: 15px;
    margin-bottom: 15px;
`;

const LinkList = ({ items }) => (
    <LinkListContainer>
        {items.map((item, index) => (
            <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                <LinkButton className="secondary">{item.label}</LinkButton>
            </a>
        ))}
    </LinkListContainer>
);

LinkList.propTypes = {
    items: PropTypes.array
};

export default LinkList;
