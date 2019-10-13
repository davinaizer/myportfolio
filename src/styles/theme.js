import styled from 'styled-components/macro';

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

export { colors, SectionTitle, TitleSeparator };
