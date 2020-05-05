import { research } from 'tests/__mocks__/research';

import { deleteResearch, updateResearch } from './util';

describe('updateResearch', () => {
  it('should update', () => {
    const r = updateResearch(research.multi(), { ...research.single(), name: 'updated' });
    expect(r[0].name).toBe('updated');
  });
  it('should add', () => {
    const r = updateResearch(research.multi(), { ...research.single(10), name: 'updated' });
    expect(r[5].name).toBe('updated');
    expect(r.length).toBe(6);
  });
});

it('deleteResearch', () => {
  const r = deleteResearch(research.multi(), research.single().id);
  expect(r.length).toBe(4);
  expect(r[0].name).toBe('NAME_1');
});
