import React from 'react';
import styled from 'styled-components';

const Button = ({ type, content, color }) => {
  return (
    <StyledButton type={type} style={{ color }}>
      {content}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  font-size: 15px;
  line-height: 19.5px;

  &:hover {
    cursor: pointer;
  }
`;
