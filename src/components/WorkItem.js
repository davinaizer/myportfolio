import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Col, Row } from 'reactstrap';
import styled, { css } from 'styled-components';

import { colors } from '../styles/theme';
import TagList from './TagList';

const WorkItemContainer = styled(Row)`
    background-color: ${colors.charcoal};
    margin-top: 50px;
`;

const WorkItemThumb = styled.div`
    img {
        height: 100%;
        width: 100%;
    }
`;

const WorkItemButton = styled(Button)`
    font-size: 12px;
    padding: 5px 10px;
`;

const Title = styled.p`
    color: ${colors.sizzlingRed};
    font-weight: bold;
`;

const Body = styled.p``;

const WorkItemCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    padding: 30px;
    width: 100%;

    ${({ isFlipped }) =>
        isFlipped &&
        css`
            border: 0;
            margin-left: 4px;
        `}
`;

const StyledTagList = styled(TagList)`
    margin-top: 15px;
`;

const WorkItem = ({ id, thumb, title, summary, tags, isFlipped }) => (
    <WorkItemContainer noGutters>
        <Col md="6">
            <WorkItemThumb>
                <Link to={'/work/' + id}>
                    <img src={process.env.PUBLIC_URL + thumb} alt={title} />
                </Link>
            </WorkItemThumb>
        </Col>

        <Col md="6" className={isFlipped && 'order-md-first'}>
            <WorkItemCard isFlipped={isFlipped}>
                <div>
                    <Title>{title}</Title>
                    <Body className="small">{summary}</Body>

                    <Link to={'/work/' + id}>
                        <WorkItemButton size="sm" color="secondary">
                            MORE INFO
                        </WorkItemButton>
                    </Link>
                </div>
                <StyledTagList size="small" items={tags} />
            </WorkItemCard>
        </Col>
    </WorkItemContainer>
);

WorkItem.propTypes = {
    id: PropTypes.number,
    thumb: PropTypes.string,
    title: PropTypes.string,
    summary: PropTypes.string,
    tags: PropTypes.object,
    isFlipped: PropTypes.bool
};

export default WorkItem;
