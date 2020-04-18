import { Dispatch, SetStateAction, useCallback } from 'react';
import { Research, Researches, Result, Results, Search } from 'types/research';

export const useResultListActions = (research: Research, setResearches: Dispatch<SetStateAction<Researches>>) => {
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

  return {
    archive,
    toggleStar,
  };
};
