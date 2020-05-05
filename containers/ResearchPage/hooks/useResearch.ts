import { useMemo } from 'react';
import { Research } from 'types/research';
import createPersistedState from 'use-persisted-state';

const useResearchesState = createPersistedState('researches');

export const useResearch = (id: string) => {
  const [researches, setResearches] = useResearchesState<Research[]>([]);
  const research = useMemo(() => {
    const r = researches.find((r) => r.id === id);
    return r;
  }, [researches, id]);

  return {
    research,
    setResearches,
  };
};
