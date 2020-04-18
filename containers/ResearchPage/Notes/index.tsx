import styled from '@emotion/styled';
import * as React from 'react';
import ContentEditable from 'react-contenteditable';

import { useNotes } from '../hooks/useNotes';

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
