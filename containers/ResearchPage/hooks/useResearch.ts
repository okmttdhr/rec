import { useEffect, useMemo } from 'react';
import { VERSION } from 'services/constants';
import { Research } from 'types/research';
import createPersistedState from 'use-persisted-state';

const useVersion = createPersistedState('version');
const useResearchesState = createPersistedState('researches');

export const useResearch = (id: string) => {
  const [version, setVersion] = useVersion(VERSION);
  const [researches, setResearches] = useResearchesState<Research[]>([]);
  const research = useMemo(() => {
    const r = researches.find((r) => r.id === id);
    return r;
  }, [researches, id]);

  useEffect(() => {
    if (version !== VERSION) {
      setVersion(VERSION);
      setResearches([]);
    }
  }, [version, setVersion, setResearches]);

  return {
    research,
    setResearches,
  };
};
