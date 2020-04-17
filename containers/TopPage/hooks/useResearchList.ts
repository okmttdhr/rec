import { Researches, Research } from 'types/research';
import createPersistedState from 'use-persisted-state';
import { useMemo, useCallback } from 'react';

const useResearchesState = createPersistedState('researches');

export const useResearchList = () => {
  const [researches, setResearches] = useResearchesState<Researches>({});

  const researchesArray = useMemo(() => {
    return Object.values(researches);
  }, [researches]);

  const archive = useCallback(
    (research: Research) => {
      const r = { ...researches };
      delete r[research.id];
      setResearches(() => r);
    },
    [researches, setResearches],
  );

  return {
    archive,
    researchesArray,
    setResearches,
  };
};
