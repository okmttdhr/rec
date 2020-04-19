import { mockBuilder } from 'tests/mock-builder';
import { Research, Search, Searches } from 'types/research';

import { text } from './useExportMarkdown';

const result = mockBuilder((i) => {
  return {
    id: `ID_${i}`,
    title: `TITLE_${i}`,
    link: `http://example.com/${i}`,
    star: false,
    read: false,
  };
});
const results = mockBuilder(() => {
  return Array.from(Array(5).keys()).reduce((p, c) => {
    return {
      ...p,
      [`ID_${c}`]: result.single(c),
    };
  }, {});
});

const search = mockBuilder<Search>((i) => {
  return {
    id: `ID_${i}`,
    q: `Q_${i}`,
    results: results.single(),
    show: true,
    createdAt: `CREATED_AT_${i}`,
  };
});
const searches = mockBuilder<Searches>(() => {
  return Array.from(Array(5).keys()).reduce((p, c) => {
    return {
      ...p,
      [`ID_${c}`]: search.single(c),
    };
  }, {});
});

const research = mockBuilder<Research>((i) => {
  return {
    id: `ID_${i}`,
    name: `NAME_${i}`,
    searches: searches.single(),
    notes: `NOTES_${i}`,
    createdAt: `CREATED_AT_${i}`,
  };
});

describe('text', () => {
  it('should generate markdown text', () => {
    const t = text(
      {
        ...research.single(),
        searches: {
          ...searches.single(),
          ID_0: search.single(0, {
            results: results.single(0, {
              ID_0: result.single(0, {
                star: true,
              }),
            }),
          }),
          ID_1: search.single(1, {
            results: results.single(1, {
              ID_1: result.single(1, {
                star: true,
              }),
            }),
          }),
        },
      },
      searches.single(),
    );
    expect(t).toBe(`# Research for "NAME_0"

NOTES_0

## Stars

- **[TITLE_0](http://example.com/0)**
- **[TITLE_1](http://example.com/1)**
- **[TITLE_2](http://example.com/2)**
- **[TITLE_3](http://example.com/3)**
- **[TITLE_4](http://example.com/4)**
- **[TITLE_0](http://example.com/0)**
- **[TITLE_1](http://example.com/1)**
- **[TITLE_2](http://example.com/2)**
- **[TITLE_3](http://example.com/3)**
- **[TITLE_4](http://example.com/4)**
- **[TITLE_0](http://example.com/0)**
- **[TITLE_1](http://example.com/1)**
- **[TITLE_2](http://example.com/2)**
- **[TITLE_3](http://example.com/3)**
- **[TITLE_4](http://example.com/4)**
- **[TITLE_0](http://example.com/0)**
- **[TITLE_1](http://example.com/1)**
- **[TITLE_2](http://example.com/2)**
- **[TITLE_3](http://example.com/3)**
- **[TITLE_4](http://example.com/4)**
- **[TITLE_0](http://example.com/0)**
- **[TITLE_1](http://example.com/1)**
- **[TITLE_2](http://example.com/2)**
- **[TITLE_3](http://example.com/3)**
- **[TITLE_4](http://example.com/4)**

## Q_0

- **[TITLE_0](http://example.com/0)**
- [TITLE_1](http://example.com/1)
- [TITLE_2](http://example.com/2)
- [TITLE_3](http://example.com/3)
- [TITLE_4](http://example.com/4)

## Q_1

- [TITLE_0](http://example.com/0)
- **[TITLE_1](http://example.com/1)**
- [TITLE_2](http://example.com/2)
- [TITLE_3](http://example.com/3)
- [TITLE_4](http://example.com/4)

## Q_2

- [TITLE_0](http://example.com/0)
- [TITLE_1](http://example.com/1)
- [TITLE_2](http://example.com/2)
- [TITLE_3](http://example.com/3)
- [TITLE_4](http://example.com/4)

## Q_3

- [TITLE_0](http://example.com/0)
- [TITLE_1](http://example.com/1)
- [TITLE_2](http://example.com/2)
- [TITLE_3](http://example.com/3)
- [TITLE_4](http://example.com/4)

## Q_4

- [TITLE_0](http://example.com/0)
- [TITLE_1](http://example.com/1)
- [TITLE_2](http://example.com/2)
- [TITLE_3](http://example.com/3)
- [TITLE_4](http://example.com/4)

`);
  });
});
