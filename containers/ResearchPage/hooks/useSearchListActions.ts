import { Dispatch, SetStateAction, useCallback, useMemo } from 'react';
import { Research, Result, Search } from 'types/research';
import { deleteArrayItemByID, updateArrayItemByID } from 'utils/array';

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
      const searches = updateArrayItemByID(research.searches, {
        ...search,
        show: !search.show,
      });
      setResearches((rs) => updateArrayItemByID<Research>(rs, { ...research, searches }));
    },
    [research, setResearches],
  );

  const archive = useCallback(
    (search: Search) => {
      const s = deleteArrayItemByID(research.searches, search.id);
      setResearches((rs) => updateArrayItemByID<Research>(rs, { ...research, searches: s }));
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
