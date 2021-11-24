import React from 'react';
import styled from 'styled-components';

const Button = ({ content, color }) => {
  return (
    <StyledButton type="button" style={{ color }}>
      {content}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  font-size: 15px;
  line-height: 19.5px;
  font-weight: 300;

  &:hover {
    cursor: pointer;
  }
`;
