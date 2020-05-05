import { Dispatch, SetStateAction, useCallback, useMemo } from 'react';
import { updateResearch } from 'services/researches/util';
import { deleteSearch, updateSearch } from 'services/searches/util';
import { Research, Result, Search } from 'types/research';

export const useSearchListActions = (research: Research, setResearches: Dispatch<SetStateAction<Research[]>>) => {
  const searches = useMemo(() => {
    return research?.searches ?? [];
  }, [research]);

  const openAll = useCallback((results: Result[]) => {
    results.forEach((r) => {
      window.open(r.link);
    });
  }, []);

  const toggle = useCallback(
    (search: Search) => {
      const searches = updateSearch(research.searches, {
        ...search,
        show: !search.show,
      });
      setResearches((rs) => updateResearch(rs, { ...research, searches }));
    },
    [research, setResearches],
  );

  const archive = useCallback(
    (search: Search) => {
      const s = deleteSearch(research.searches, search.id);
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
