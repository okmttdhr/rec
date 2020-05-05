import { mockBuilder } from 'tests/mock-builder';
import { Research, Result, Search } from 'types/research';

export const result = mockBuilder<Result>((i) => {
  return {
    id: `ID_${i}`,
    title: `TITLE_${i}`,
    link: `http://example.com/${i}`,
    star: false,
    read: false,
  };
});

export const search = mockBuilder<Search>((i) => {
  return {
    id: `ID_${i}`,
    q: `Q_${i}`,
    results: result.multi(),
    show: true,
    createdAt: `CREATED_AT_${i}`,
  };
});

export const research = mockBuilder<Research>((i) => {
  return {
    id: `ID_${i}`,
    name: `NAME_${i}`,
    searches: search.multi(),
    notes: `NOTES_${i}`,
    createdAt: `CREATED_AT_${i}`,
  };
});
