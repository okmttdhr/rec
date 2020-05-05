import { Dispatch, SetStateAction, useCallback } from 'react';
import { updateResearch } from 'services/researches/util';
import { Research, Result, Search } from 'types/research';

export const useResultListActions = (research: Research, setResearches: Dispatch<SetStateAction<Research[]>>) => {
  const toggleStar = useCallback(
    (search: Search, result: Result) => {
      const results = {
        ...research.searches[search.id].results,
        [result.id]: {
          ...result,
          star: !result.star,
        },
      };

      const searches = {
        ...research.searches,
        [search.id]: {
          ...search,
          results,
        },
      };

      setResearches((rs) => updateResearch(rs, { ...research, searches }));
    },
    [research, setResearches],
  );

  const archive = useCallback(
    (search: Search, result: Result) => {
      const results = { ...research.searches[search.id].results };
      delete results[result.id];

      const searches = {
        ...research.searches,
        [search.id]: {
          ...search,
          results,
        },
      };

      setResearches((rs) => updateResearch(rs, { ...research, searches }));
    },
    [research, setResearches],
  );

  return {
    archive,
    toggleStar,
  };
};
