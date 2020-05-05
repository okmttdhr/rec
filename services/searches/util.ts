import { Search } from 'types/research';
import { updateArray } from 'utils/array';

export const updateSearch = (searches: Search[], search: Search) => {
  const i = searches.findIndex((r) => r.id === search.id);
  if (i === -1) {
    return updateArray(searches.length, search, searches);
  }
  return updateArray(i, search, searches);
};

export const deleteSearch = (searches: Search[], search: Search) => {
  const i = searches.findIndex((r) => r.id === search.id);
  const arr = [...searches];
  arr.splice(i, 1);
  return arr;
};
