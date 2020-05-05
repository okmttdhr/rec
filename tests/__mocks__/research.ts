import { mockBuilder } from 'tests/mock-builder';
import { Research, Result, Results, Search, Searches } from 'types/research';

export const result = mockBuilder<Result>((i) => {
  return {
    id: `ID_${i}`,
    title: `TITLE_${i}`,
    link: `http://example.com/${i}`,
    star: false,
    read: false,
  };
});
export const results = mockBuilder<Results>(() => {
  return Array.from(Array(5).keys()).reduce((p, c) => {
    return {
      ...p,
      [`ID_${c}`]: result.single(c),
    };
  }, {});
});

export const search = mockBuilder<Search>((i) => {
  return {
    id: `ID_${i}`,
    q: `Q_${i}`,
    results: results.single(),
    show: true,
    createdAt: `CREATED_AT_${i}`,
  };
});
export const searches = mockBuilder<Searches>(() => {
  return Array.from(Array(5).keys()).reduce((p, c) => {
    return {
      ...p,
      [`ID_${c}`]: search.single(c),
    };
  }, {});
});

export const research = mockBuilder<Research>((i) => {
  return {
    id: `ID_${i}`,
    name: `NAME_${i}`,
    searches: searches.single(),
    notes: `NOTES_${i}`,
    createdAt: `CREATED_AT_${i}`,
  };
});
