import styled from '@emotion/styled';
import * as React from 'react';
import { Search } from 'types/research';

import { useResultListActions } from '../hooks/useResultListActions';

type Props = ReturnType<typeof useResultListActions> & {
  search: Search;
};

export const ResultList: React.FC<Props> = ({ search, toggleStar, archive }) => {
  return (
    <div>
      <List>
        {Object.values(search.results).map((r) => {
          return (
            <Item key={r.link} star={r.star}>
              <ItemContent>
                <a href={r.link} target="_blank" rel="noopener noreferrer">
                  {r.title}
                </a>
                <StarButton onClick={() => toggleStar(search, r)}>{r.star ? 'Unstar' : 'Star'}</StarButton>
                <ArchiveButton onClick={() => archive(search, r)}>Archive</ArchiveButton>
              </ItemContent>
            </Item>
          );
        })}
      </List>
    </div>
  );
};

const List = styled.ul``;

const Item = styled.li<{ star: boolean }>`
  margin-bottom: 5px;
  ${({ star }) => star && 'font-weight: bold;'}
  &:hover {
    background-color: #ddd;
  }
`;

const ItemContent = styled.div`
  display: flex;
  align-items: center;
`;

const StarButton = styled.button`
  margin-left: auto;
`;

const ArchiveButton = styled.button`
  margin-left: 5px;
`;
