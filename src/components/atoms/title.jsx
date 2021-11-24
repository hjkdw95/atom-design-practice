import React from 'react';
import styled from 'styled-components';

const Title = ({ content, titleClass }) => {
  return <StyledTitle className={titleClass}>{content}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h1`
  display: inline-block;
  color: ${prpos => prpos.theme.black};
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }

  &.HeaderTitle {
    font-size: 20px;
    line-height: 44px;
  }

  &.contentTitle {
    font-size: 16px;
    line-height: 16px;
  }
`;
