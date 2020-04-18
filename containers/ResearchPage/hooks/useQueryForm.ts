import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { getSearchResults } from 'services/getSearchResults';
import { Research, Researches, Search, Searches } from 'types/research';
import { v4 as uuid } from 'uuid';

export const useQueryForm = (research: Research, setResearches: Dispatch<SetStateAction<Researches>>) => {
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

        const hiddenSearches = Object.values(research.searches).reduce((p: Searches | {}, c: Search) => {
          return {
            ...p,
            [c.id]: {
              ...c,
              show: false,
            },
          };
        }, {});

        const searchID = uuid();
        const searches = {
          ...hiddenSearches,
          [searchID]: {
            id: searchID,
            q,
            results,
            show: true,
            createdAt: '',
          },
        };

        const researchID = research.id;
        setResearches((rs) => {
          return {
            ...rs,
            [researchID]: {
              ...research,
              searches,
            },
          };
        });
      } catch (error) {
        console.log(error);
      }
    },
    [q, research],
  );

  useEffect(() => {
    if (q === '') {
      const firstSearch = Object.values(research?.searches ?? {})[0];
      setQ(firstSearch?.q ?? '');
    }
  }, [research, q]);

  return {
    onChange,
    onSubmit,
    q,
  };
};
