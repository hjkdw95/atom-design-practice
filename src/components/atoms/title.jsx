import React from 'react';
import styled from 'styled-components';

const Title = ({ content }) => {
  return <StyledTitle>{content}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h1`
  display: inline-block;
  font-size: 20px;
  line-height: 44px;
  font-weight: 700;
`;
