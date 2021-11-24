import React from 'react';
import styled from 'styled-components';

const Menu = ({ content }) => {
  return <StyledMenu>{content}</StyledMenu>;
};
export default Menu;

const StyledMenu = styled.a`
  color: ${props => props.theme.black};
  font-size: 15px;
  line-height: 21px;

  &:hover {
    cursor: pointer;
  }
`;
