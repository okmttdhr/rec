import * as React from 'react';
import styled from '@emotion/styled';
import { useNotes } from '../hooks/useNotes';
import ContentEditable from 'react-contenteditable';

type Props = ReturnType<typeof useNotes>;

export const Notes: React.FC<Props> = ({ notes, onChange }) => {
  return (
    <>
      <StyledContentEditable html={notes} onChange={onChange}></StyledContentEditable>
    </>
  );
};

const StyledContentEditable = styled(ContentEditable)`
  padding: 5px;
  min-height: 100px;
  border: 1px solid #ddd;
`;
