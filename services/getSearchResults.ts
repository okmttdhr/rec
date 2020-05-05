import fetch from 'isomorphic-unfetch';
import { Result } from 'types/research';

export const getSearchResults = async (q: string): Promise<Result[]> => {
  const res = await fetch(`/api/customsearch?q=${q}`);
  const data = await res.json();
  return data.results;
};
