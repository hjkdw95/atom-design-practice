import React from 'react';
import styled from 'styled-components';

const Button = ({ content, color }) => {
  return <button style={{ color }}>{content}</button>;
};

export default Button;

const styledButton = styled.button`
  font-size: 15px;
  line-height: 19.5px;
  font-weight: 300;
`;
