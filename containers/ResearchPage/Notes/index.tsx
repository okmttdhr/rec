import * as React from 'react';
import styled from '@emotion/styled';
import { useNotes } from '../hooks/useNotes';

type Props = ReturnType<typeof useNotes>;

export const Notes: React.FC<Props> = ({ notes, onChange }) => {
  return (
    <>
      <Textarea value={notes} onChange={onChange} />
      <ContentEditable contentEditable></ContentEditable>
    </>
  );
};

const Textarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  resize: vertical;
  padding: 5px;
  box-sizing: border-box;
`;

const ContentEditable = styled.div`
  border: 1px solid #ddd;
`;
