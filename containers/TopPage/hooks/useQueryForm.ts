import router from 'next/router';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { getSearchResults } from 'services/getSearchResults';
import { Research } from 'types/research';
import { v4 as uuid } from 'uuid';

export const useQueryForm = (setResearches: Dispatch<SetStateAction<Research[]>>) => {
  const [q, setQ] = useState('');

  const onChange = useCallback(
    (event: React.SyntheticEvent) => {
      const target = event.target as HTMLInputElement;
      setQ(target.value);
    },
    [setQ],
  );
  const onSubmit = useCallback(
    async (event: React.SyntheticEvent) => {
      try {
        event.preventDefault();

        const results = await getSearchResults(q);

        const searchID = uuid();
        const searches = [
          {
            id: searchID,
            q,
            results,
            show: true,
            createdAt: '',
          },
        ];

        const researchID = uuid();
        setResearches((rs) => {
          return rs.concat({
            createdAt: 'string',
            id: researchID,
            name: q,
            notes: '',
            searches,
          });
        });

        router.push('/researches/[id]', `/researches/${researchID}`);
      } catch (error) {
        console.log(error);
      }
    },
    [q, setResearches],
  );

  return {
    onChange,
    onSubmit,
    q,
  };
};
