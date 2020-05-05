import { updateSearch } from 'services/searches/util';
import { research, result, search } from 'tests/__mocks__/research';
import { updateArrayItemByID } from 'utils/array';

import { text } from './useExportMarkdown';

describe('text', () => {
  it('should generate markdown text', () => {
    const t = text(
      {
        ...research.single(),
        searches: updateSearch(
          updateSearch(
            search.multi(),
            search.single(0, {
              results: updateArrayItemByID(result.multi(), result.single(0, { star: true })),
            }),
          ),
          search.single(1, {
            results: updateArrayItemByID(result.multi(), result.single(1, { star: true })),
          }),
        ),
      },
      search.multi(),
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
