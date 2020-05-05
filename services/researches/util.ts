import { Research } from 'types/research';
import { updateArray } from 'utils/array';

export const updateResearch = (researches: Research[], research: Research) => {
  const i = researches.findIndex((r) => r.id === research.id);
  if (i === -1) {
    return updateArray(researches.length, research, researches);
  }
  return updateArray(i, research, researches);
};

export const deleteResearch = (researches: Research[], research: Research) => {
  const i = researches.findIndex((r) => r.id === research.id);
  const arr = [...researches];
  arr.splice(i, 1);
  return arr;
};
