import fetch from 'isomorphic-unfetch';
import { Result } from 'types/research';

export const getSearchResults = async (q: string) => {
  const res = await fetch(
    `https://customsearch.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_CUSTOM_SEARCH_KEY}&cx=${process.env.GOOGLE_CUSTOM_SEARCH_CX}&q=${q}`,
  );
  const data = await res.json();
  const results: Result[] = data.items.map((item: any) => {
    return {
      id: item.cacheId,
      title: item.title,
      link: item.link,
      star: false,
      read: false,
    };
  });

  return results;
};
