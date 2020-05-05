import { Dispatch, SetStateAction, useCallback, useMemo } from 'react';
import { updateResearch } from 'services/researches/util';
import { Research, Results, Search } from 'types/research';

export const useSearchListActions = (research: Research, setResearches: Dispatch<SetStateAction<Research[]>>) => {
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
      setResearches((rs) => updateResearch(rs, { ...research, searches }));
    },
    [research, setResearches],
  );

  const archive = useCallback(
    (search: Search) => {
      const s = { ...research.searches };
      delete s[search.id];
      setResearches((rs) => updateResearch(rs, { ...research, searches: s }));
    },
    [research, setResearches],
  );

  return {
    archive,
    openAll,
    searches,
    toggle,
  };
};
