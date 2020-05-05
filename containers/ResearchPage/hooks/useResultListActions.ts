import { Dispatch, SetStateAction, useCallback } from 'react';
import { updateResearch } from 'services/researches/util';
import { updateSearch } from 'services/searches/util';
import { Research, Result, Search } from 'types/research';

export const useResultListActions = (research: Research, setResearches: Dispatch<SetStateAction<Research[]>>) => {
  const toggleStar = useCallback(
    (search: Search, result: Result) => {
      const targetSearch = research.searches.find((s) => s.id === search.id);
      if (!targetSearch) {
        return;
      }
      const results = {
        ...targetSearch.results,
        [result.id]: {
          ...result,
          star: !result.star,
        },
      };
      const searches = updateSearch(research.searches, { ...search, results });
      setResearches((rs) => updateResearch(rs, { ...research, searches }));
    },
    [research, setResearches],
  );

  const archive = useCallback(
    (search: Search, result: Result) => {
      const targetSearch = research.searches.find((s) => s.id === search.id);
      if (!targetSearch) {
        return;
      }
      const results = { ...targetSearch.results };
      delete results[result.id];
      const searches = updateSearch(research.searches, { ...search, results });
      setResearches((rs) => updateResearch(rs, { ...research, searches }));
    },
    [research, setResearches],
  );

  return {
    archive,
    toggleStar,
  };
};
