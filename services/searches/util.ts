import { Search } from 'types/research';
import { deleteArrayItemByID, updateArrayItemByID } from 'utils/array';

export const updateSearch = (searches: Search[], search: Search) => {
  return updateArrayItemByID(searches, search);
};

export const deleteSearch = (searches: Search[], id: string) => {
  return deleteArrayItemByID(searches, id);
};
