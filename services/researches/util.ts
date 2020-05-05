import { Research, Result, Search } from 'types/research';
import { deleteArrayItemByID, updateArrayItemByID } from 'utils/array';

export const updateResearch = (researches: Research[], research: Research) => {
  return updateArrayItemByID(researches, research);
};

export const deleteResearch = (researches: Research[], id: string) => {
  return deleteArrayItemByID(researches, id);
};

export const updateResult = (researches: Research[], research: Research, search: Search, result: Result) => {
  const targetSearch = research.searches.find((s) => s.id === search.id);
  if (!targetSearch) {
    return;
  }
  const results = updateArrayItemByID<Result>(targetSearch.results, result);
  const searches = updateArrayItemByID<Search>(research.searches, { ...targetSearch, results });
  return updateArrayItemByID<Research>(researches, { ...research, searches });
};

export const deleteResult = (researches: Research[], research: Research, search: Search, resultID: string) => {
  const targetSearch = research.searches.find((s) => s.id === search.id);
  if (!targetSearch) {
    return;
  }
  const results = deleteArrayItemByID<Result>(targetSearch.results, resultID);
  const searches = updateArrayItemByID<Search>(research.searches, { ...targetSearch, results });
  return updateArrayItemByID<Research>(researches, { ...research, searches });
};
