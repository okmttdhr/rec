import linkifyHtml from 'linkifyjs/html';
import { Dispatch, SetStateAction, useCallback, useMemo } from 'react';
import { Research } from 'types/research';
import { updateArrayItemByID } from 'utils/array';

export const useNotes = (research: Research, setResearches: Dispatch<SetStateAction<Research[]>>) => {
  const notes = useMemo(() => {
    return research?.notes ?? '';
  }, [research]);

  const onChange = useCallback(
    (event: React.SyntheticEvent) => {
      const target = event.target as HTMLInputElement;

      // TODO: Consider performance
      const notes = linkifyHtml(target.value, { attributes: { contenteditable: 'false' } });

      setResearches((rs) => updateArrayItemByID<Research>(rs, { ...research, notes }));
    },
    [research, setResearches],
  );

  return {
    notes,
    onChange,
  };
};
