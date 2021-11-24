import React from 'react';
import Title from '../atoms/Title';
import NavList from '../molecules/NavList';
import styled from 'styled-components';

const Navbar = props => {
  const LIST = ['Todos', 'MovieList'];

  return (
    <StyledNavbar>
      <Title content={'Atom Todos'} titleClass="HeaderTitle" />
      <NavList lists={LIST} />
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 15%;
  background-color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.shadow};
`;
