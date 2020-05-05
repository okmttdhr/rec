import { Research } from 'types/research';
import { deleteArrayItemByID, updateArrayItemByID } from 'utils/array';

export const updateResearch = (researches: Research[], research: Research) => {
  return updateArrayItemByID(researches, research);
};

export const deleteResearch = (researches: Research[], id: string) => {
  return deleteArrayItemByID(researches, id);
};
