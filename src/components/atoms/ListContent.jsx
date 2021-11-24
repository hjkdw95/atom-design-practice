import React from 'react';
import styled from 'styled-components';

const ListContent = ({ color, content }) => {
  return <StyledContent style={{ color }}>{content}</StyledContent>;
};

export default ListContent;

const StyledContent = styled.span`
  color: ${props => props.theme.black};
  font-size: 15px;
  line-height: 19.5px;
`;
