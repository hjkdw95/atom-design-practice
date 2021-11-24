import React from 'react';

const Form = ({ children, onsubmit, formRef }) => {
  return (
    <form ref={formRef} onSubmit={onsubmit}>
      {children}
    </form>
  );
};

export default Form;
