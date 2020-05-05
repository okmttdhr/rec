import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { getSearchResults } from 'services/getSearchResults';
import { Research } from 'types/research';
import { updateArrayItemByID } from 'utils/array';
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
        const searches = updateArrayItemByID(hiddenSearches, {
          id: searchID,
          q,
          results,
          show: true,
          createdAt: '',
        });

        setResearches((rs) => updateArrayItemByID<Research>(rs, { ...research, searches }));
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
    // Disallow empty only first time
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [research]);

  return {
    onChange,
    onSubmit,
    q,
  };
};
