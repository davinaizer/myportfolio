import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const SocialIconContainer = styled.div`
    display: inline;

    img {
        height: 80px;
        margin-right: 30px;
        margin-top: 30px;
        width: 80px;
        transition: all 0.25s;

        &:hover {
            transform: scale(1.2);
        }
    }
`;

const SocialIcon = ({ icon, href }) => (
    <SocialIconContainer>
        <a href={href} target="_blank" rel="noopener noreferrer">
            <img src={icon} alt="" />
        </a>
    </SocialIconContainer>
);

SocialIcon.propTypes = {
    icon: PropTypes.string,
    href: PropTypes.string
};

export default SocialIcon;
