import * as React from 'react';
import styled from '@emotion/styled';
import { useResultListActions } from '../hooks/useResultListActions';
import { ResultList } from '../ResultList';
import { useStarList } from '../hooks/useStarList';

type Props = ReturnType<typeof useStarList> & {
  resultActionsState: ReturnType<typeof useResultListActions>;
};

export const StarList: React.FC<Props> = ({ stars, show, toggle, resultActionsState }) => {
  return (
    <List>
      <Title onClick={() => toggle()}>Stars</Title>
      {show &&
        Object.values(stars).map((s) => {
          return (
            <li key={s.id}>
              <ResultList {...resultActionsState} search={s}></ResultList>
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

const Title = styled.h2`
  margin: 0 0 10px 0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;
