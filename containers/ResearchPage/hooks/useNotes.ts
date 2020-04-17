import { useCallback, Dispatch, SetStateAction, useMemo } from 'react';
import { Research, Researches } from 'types/research';

export const useNotes = (research: Research, setResearches: Dispatch<SetStateAction<Researches>>) => {
  const notes = useMemo(() => {
    return research?.notes ?? '';
  }, [research]);

  const onChange = useCallback(
    (event: React.SyntheticEvent) => {
      const target = event.target as HTMLInputElement;
      setResearches((rs) => {
        return {
          ...rs,
          [research.id]: {
            ...research,
            notes: target.value,
          },
        };
      });
    },
    [research, setResearches],
  );

  return {
    notes,
    onChange,
  };
};
