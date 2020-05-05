import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { getSearchResults } from 'services/getSearchResults';
import { updateResearch } from 'services/researches/util';
import { updateSearch } from 'services/searches/util';
import { Research, Search } from 'types/research';
import { v4 as uuid } from 'uuid';

export const useQueryForm = (research: Research, setResearches: Dispatch<SetStateAction<Research[]>>) => {
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

        const hiddenSearches = research.searches.map((s) => {
          return {
            ...s,
            show: false,
          };
        });

        const searchID = uuid();
        const searches = updateSearch(hiddenSearches, {
          id: searchID,
          q,
          results,
          show: true,
          createdAt: '',
        });

        setResearches((rs) => updateResearch(rs, { ...research, searches }));
      } catch (error) {
        console.log(error);
      }
    },
    [q, research, setResearches],
  );

  useEffect(() => {
    if (q === '') {
      const firstSearch = (research?.searches ?? [])[0];
      setQ(firstSearch?.q ?? '');
    }
  }, [research, q]);

  return {
    onChange,
    onSubmit,
    q,
  };
};
