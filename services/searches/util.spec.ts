import { search } from 'tests/__mocks__/research';

import { deleteSearch, updateSearch } from './util';

describe('updateResearch', () => {
  it('should update', () => {
    const r = updateSearch(search.multi(), { ...search.single(), q: 'updated' });
    expect(r[0].q).toBe('updated');
  });
  it('should add', () => {
    const r = updateSearch(search.multi(), { ...search.single(10), q: 'updated' });
    expect(r[5].q).toBe('updated');
    expect(r.length).toBe(6);
  });
});

it('deleteResearch', () => {
  const r = deleteSearch(search.multi(), search.single());
  expect(r.length).toBe(4);
  expect(r[0].q).toBe('Q_1');
});
