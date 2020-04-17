import * as React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useResearchList } from '../hooks/useResearchList';

type Props = ReturnType<typeof useResearchList>;

export const ResearchList: React.FC<Props> = ({ archive, researchesArray }) => {
  console.log(researchesArray);

  return (
    researchesArray.length > 0 && (
      <>
        <h1>Your Researches</h1>
        <ul>
          {researchesArray.map((r) => (
            <Item key={r.id}>
              <ItemContent>
                <Link href={`/researches/${r.id}`}>
                  <a>{r.name}</a>
                </Link>
                <ArchiveButton onClick={() => archive(r)}>Archive</ArchiveButton>
              </ItemContent>
            </Item>
          ))}
        </ul>
      </>
    )
  );
};

const Item = styled.li`
  margin-bottom: 5px;
`;

const ItemContent = styled.div`
  display: flex;
  align-items: center;
`;

const ArchiveButton = styled.button`
  margin-left: auto;
`;
