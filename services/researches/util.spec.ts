import { research } from 'tests/__mocks__/research';

import { deleteResearch, updateResearch } from './util';

it('updateResearch', () => {
  const r = updateResearch(research.multi(), { ...research.single(), name: 'updated' });
  expect(r[0].name).toBe('updated');
});

it('deleteResearch', () => {
  const r = deleteResearch(research.multi(), research.single());
  expect(r.length).toBe(4);
  expect(r[0].name).toBe('NAME_1');
});
