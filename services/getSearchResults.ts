import fetch from 'isomorphic-unfetch';
import { Results } from 'types/research';

export const getSearchResults = async (q: string) => {
  const res = await fetch(
    `https://customsearch.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_CUSTOM_SEARCH_KEY}&cx=${process.env.GOOGLE_CUSTOM_SEARCH_CX}&q=${q}`,
  );
  const data = await res.json();
  const results: Results = data.items.reduce((p: Results | {}, c: any) => {
    return {
      ...p,
      [c.cacheId]: {
        id: c.cacheId,
        title: c.title,
        link: c.link,
        star: false,
        read: false,
      },
    };
  }, {});

  return results;
};
