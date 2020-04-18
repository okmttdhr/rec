import { useCallback, useEffect, useState } from 'react';
import { Research, Results, Search, Searches } from 'types/research';

export const useStarList = (research: Research) => {
  const [stars, setStars] = useState<Searches>({});
  const [show, setShow] = useState(true);

  const openAll = useCallback((searches: Searches) => {
    Object.values(searches).forEach((s) => {
      Object.values(s.results).forEach((r) => {
        window.open(r.link);
      });
    });
  }, []);

  const toggle = useCallback(() => {
    setShow((s) => !s);
  }, [setShow]);

  useEffect(() => {
    const starredResults = (results: Results) =>
      Object.values(results)
        .filter((r) => {
          return r.star;
        })
        .reduce<Results>((p, c) => {
          return {
            ...p,
            [c.id]: {
              ...c,
            },
          };
        }, {});

    const stars = Object.values(research?.searches ?? {})
      .map((s) => {
        return {
          ...s,
          results: starredResults(s.results),
        } as Search;
      })
      .filter((s) => Object.values(s.results).length > 0)
      .reduce<Searches>((p, c) => {
        return {
          ...p,
          [c.id]: {
            ...c,
          },
        };
      }, {});

    setStars(stars);
  }, [research]);

  return {
    openAll,
    show,
    stars,
    toggle,
  };
};
