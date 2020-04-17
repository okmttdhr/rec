import createPersistedState from 'use-persisted-state';
import { Researches } from 'types/research';
import { useMemo } from 'react';

const useResearchesState = createPersistedState('researches');

export const useResearch = (id: string) => {
  const [researches, setResearches] = useResearchesState<Researches>({});
  const research = useMemo(() => {
    const r = researches[id as string];
    return r;
  }, [researches, id]);

  return {
    research,
    setResearches,
  };
};
