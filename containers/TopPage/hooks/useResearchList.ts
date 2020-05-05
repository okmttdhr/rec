import { useCallback, useMemo } from 'react';
import { deleteResearch } from 'services/researches/util';
import { Research } from 'types/research';
import createPersistedState from 'use-persisted-state';

const useResearchesState = createPersistedState('researches');

export const useResearchList = () => {
  const [researches, setResearches] = useResearchesState<Research[]>([]);

  const researchesArray = useMemo(() => {
    return researches;
  }, [researches]);

  const archive = useCallback(
    (research: Research) => {
      setResearches((rs) => deleteResearch(rs, research.id));
    },
    [setResearches],
  );

  return {
    archive,
    researchesArray,
    setResearches,
  };
};
