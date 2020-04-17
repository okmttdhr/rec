import { Search, Research, Researches } from 'types/research';
import { useCallback, Dispatch, SetStateAction, useMemo } from 'react';

export const useSearchListActions = (research: Research, setResearches: Dispatch<SetStateAction<Researches>>) => {
  const searches = useMemo(() => {
    return research?.searches ?? [];
  }, [research]);

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
    searches,
    toggle,
  };
};
