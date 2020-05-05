import { research, result, results, search, searches } from 'tests/__mocks__/research';

import { text } from './useExportMarkdown';

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
