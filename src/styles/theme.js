import styled, { css } from 'styled-components/macro';
import { rgba } from 'polished';

import noiseBg from '../assets/black_noise_50.png';

const colors = {
    black: '#040303',
    eerieBlack: '#181a26',
    jungleGreen: '#212420',
    charcoal: '#30353a',
    gunmetal: '#262b3d',
    sizzlingRed: '#ff3454',
    cinereous: '#938677',
    darkVanilla: '#cfc4b2',
    white: '#fff'
};

const Section = styled.section`
    background-attachment: fixed;

    ${({ backgroundImage }) => css`
        background-image: linear-gradient(${rgba(colors.black, 0)}, ${rgba(colors.black, 1)}), url(${noiseBg}),
            url(${backgroundImage});
    `}

    background-position: center top;
    background-repeat: no-repeat, repeat, no-repeat;
    background-size: auto, auto, cover;
`;

const SectionTitle = styled.h2`
    font-size: 48px;
    font-weight: bold;
    text-transform: lowercase;

    &--inverse {
        color: ${colors.eerieBlack};
    }
`;

const TitleSeparator = styled.hr`
    border-top: 4px solid ${colors.sizzlingRed};
    display: block;
    margin-bottom: 30px;
    width: 80px;
`;

export { colors, Section, SectionTitle, TitleSeparator };
