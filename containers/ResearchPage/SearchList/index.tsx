import styled from '@emotion/styled';
import * as React from 'react';

import { useResultListActions } from '../hooks/useResultListActions';
import { useSearchListActions } from '../hooks/useSearchListActions';
import { ResultList } from '../ResultList';

type Props = ReturnType<typeof useSearchListActions> & {
  resultActionsState: ReturnType<typeof useResultListActions>;
};

export const SearchList: React.FC<Props> = ({ archive, searches, toggle, resultActionsState, openAll }) => {
  return (
    <List>
      {Object.values(searches).map((s) => {
        return (
          <li key={s.id}>
            <TitleWrapper>
              <Title onClick={() => toggle(s)}>{s.q}</Title>
              <ArchiveButton onClick={() => archive(s)}>Archive</ArchiveButton>
            </TitleWrapper>
            {s.show && (
              <div>
                <OpenAllButton onClick={() => openAll(s.results)}>Open All</OpenAllButton>
                <ResultList {...resultActionsState} search={s}></ResultList>
              </div>
            )}
          </li>
        );
      })}
    </List>
  );
};

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    background-color: #ddd;
  }
`;

const Title = styled.h2`
  margin: 0 0 10px 0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;

const ArchiveButton = styled.button`
  margin-left: auto;
`;

const OpenAllButton = styled.button`
  margin-bottom: 10px;
`;
