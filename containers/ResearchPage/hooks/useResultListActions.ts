import { Dispatch, SetStateAction, useCallback } from 'react';
import { Research, Result, Search } from 'types/research';
import { deleteArrayItemByID, updateArrayItemByID } from 'utils/array';

export const useResultListActions = (research: Research, setResearches: Dispatch<SetStateAction<Research[]>>) => {
  const toggleStar = useCallback(
    (search: Search, result: Result) => {
      const targetSearch = research.searches.find((s) => s.id === search.id);
      if (!targetSearch) {
        return;
      }
      const results = updateArrayItemByID<Result>(targetSearch.results, {
        ...result,
        star: !result.star,
      });
      const searches = updateArrayItemByID<Search>(research.searches, { ...targetSearch, results });
      setResearches((rs) => updateArrayItemByID<Research>(rs, { ...research, searches }));
    },
    [research, setResearches],
  );

  const archive = useCallback(
    (search: Search, result: Result) => {
      const targetSearch = research.searches.find((s) => s.id === search.id);
      if (!targetSearch) {
        return;
      }
      const results = deleteArrayItemByID<Result>(targetSearch.results, result.id);
      const searches = updateArrayItemByID<Search>(research.searches, { ...targetSearch, results });
      setResearches((rs) => updateArrayItemByID<Research>(rs, { ...research, searches }));
    },
    [research, setResearches],
  );

  return {
    archive,
    toggleStar,
  };
};
