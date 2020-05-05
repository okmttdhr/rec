import { Dispatch, SetStateAction, useCallback } from 'react';
import { deleteResult, updateResult } from 'services/researches/util';
import { Research, Result, Search } from 'types/research';

export const useResultListActions = (research: Research, setResearches: Dispatch<SetStateAction<Research[]>>) => {
  const toggleStar = useCallback(
    (search: Search, result: Result) => {
      setResearches((rs) =>
        updateResult(rs, research, search, {
          ...result,
          star: !result.star,
        }),
      );
    },
    [research, setResearches],
  );

  const archive = useCallback(
    (search: Search, result: Result) => {
      setResearches((rs) => deleteResult(rs, research, search, result.id));
    },
    [research, setResearches],
  );

  return {
    archive,
    toggleStar,
  };
};
