import { search } from 'tests/__mocks__/research';

import { deleteArrayItemByID, updateArrayItemByID } from './array';

describe('updateArrayItemByID', () => {
  it('should update', () => {
    const r = updateArrayItemByID(search.multi(), { ...search.single(), q: 'updated' });
    expect(r[0].q).toBe('updated');
  });
  it('should add', () => {
    const r = updateArrayItemByID(search.multi(), { ...search.single(10), q: 'updated' });
    expect(r[5].q).toBe('updated');
    expect(r.length).toBe(6);
  });
});

describe('deleteArrayItemByID', () => {
  it('should delete', () => {
    const r = deleteArrayItemByID(search.multi(), search.single().id);
    expect(r.length).toBe(4);
    expect(r[0].q).toBe('Q_1');
  });
  it('should not delete', () => {
    const r = deleteArrayItemByID(search.multi(), search.single(10).id);
    expect(r.length).toBe(5);
    expect(r[0].q).toBe('Q_0');
  });
});
