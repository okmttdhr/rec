import * as React from 'react';
import styled from '@emotion/styled';

type Props = {
  q: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

export const QueryForm: React.FC<Props> = ({ q, onSubmit, onChange }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" value={q} onChange={onChange} />
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 80%;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #dfe1e5;
  border-radius: 20px;
  padding: 7px 15px;
  &:focus {
    outline: none;
  }
`;
