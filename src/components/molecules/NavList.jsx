import React from 'react';
import Menu from '../atoms/Menu';
import styled from 'styled-components';

const NavList = ({ lists }) => {
  return (
    <StyledUl>
      {lists.map(item => (
        <StyledLi key={item.id}>
          <Menu content={item.content} />
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default NavList;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const StyledLi = styled.li`
  padding: 0 10px;
`;
