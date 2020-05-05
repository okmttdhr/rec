import { useCallback, useMemo } from 'react';
import { Research } from 'types/research';
import createPersistedState from 'use-persisted-state';
import { deleteArrayItemByID } from 'utils/array';

const useResearchesState = createPersistedState('researches');

export const useResearchList = () => {
  const [researches, setResearches] = useResearchesState<Research[]>([]);

  const researchesArray = useMemo(() => {
    return researches;
  }, [researches]);

  const archive = useCallback(
    (research: Research) => {
      setResearches((rs) => deleteArrayItemByID<Research>(rs, research.id));
    },
    [setResearches],
  );

  return {
    archive,
    researchesArray,
    setResearches,
  };
};
