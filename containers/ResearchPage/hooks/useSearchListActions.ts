import { Dispatch, SetStateAction, useCallback, useMemo } from 'react';
import { Research, Researches, Results, Search } from 'types/research';

export const useSearchListActions = (research: Research, setResearches: Dispatch<SetStateAction<Researches>>) => {
  const searches = useMemo(() => {
    return research?.searches ?? [];
  }, [research]);

  const openAll = useCallback((results: Results) => {
    Object.values(results).forEach((r) => {
      window.open(r.link);
    });
  }, []);

  const toggle = useCallback(
    (search: Search) => {
      const searches = {
        ...research.searches,
        [search.id]: {
          ...search,
          show: !search.show,
        },
      };

      setResearches((rs) => {
        return {
          ...rs,
          [research.id]: {
            ...research,
            searches,
          },
        };
      });
    },
    [research],
  );

  const archive = useCallback(
    (search: Search) => {
      const s = { ...research.searches };
      delete s[search.id];

      setResearches((rs) => {
        return {
          ...rs,
          [research.id]: {
            ...research,
            searches: s,
          },
        };
      });
    },
    [research],
  );

  return {
    archive,
    openAll,
    searches,
    toggle,
  };
};
