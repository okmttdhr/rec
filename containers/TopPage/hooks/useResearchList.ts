import { useCallback, useEffect, useMemo } from 'react';
import { VERSION } from 'services/constants';
import { Research } from 'types/research';
import createPersistedState from 'use-persisted-state';
import { deleteArrayItemByID } from 'utils/array';

const useVersion = createPersistedState('version');
const useResearchesState = createPersistedState('researches');

export const useResearchList = () => {
  const [version, setVersion] = useVersion(VERSION);
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

  useEffect(() => {
    if (version !== VERSION) {
      setVersion(VERSION);
      setResearches([]);
    }
  });

  return {
    archive,
    researchesArray,
    setResearches,
  };
};
