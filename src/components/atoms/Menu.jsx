import React from 'react';
import styled from 'styled-components';

const Menu = props => {
  return <StyledMenu>Todo</StyledMenu>;
};
export default Menu;

const StyledMenu = styled.a`
  color: ${props => props.theme.black};
  font-size: 15px;
  line-height: 21px;
`;
