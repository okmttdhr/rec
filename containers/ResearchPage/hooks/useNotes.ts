import linkifyHtml from 'linkifyjs/html';
import { Dispatch, SetStateAction, useCallback, useMemo } from 'react';
import { updateResearch } from 'services/researches/util';
import { Research } from 'types/research';

export const useNotes = (research: Research, setResearches: Dispatch<SetStateAction<Research[]>>) => {
  const notes = useMemo(() => {
    return research?.notes ?? '';
  }, [research]);

  const onChange = useCallback(
    (event: React.SyntheticEvent) => {
      const target = event.target as HTMLInputElement;

      // TODO: Consider performance
      const notes = linkifyHtml(target.value, { attributes: { contenteditable: 'false' } });

      setResearches((rs) => updateResearch(rs, { ...research, notes }));
    },
    [research, setResearches],
  );

  return {
    notes,
    onChange,
  };
};
