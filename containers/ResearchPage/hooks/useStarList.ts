import { useCallback, useEffect, useState } from 'react';
import { Research, Results, Search } from 'types/research';

export const useStarList = (research: Research) => {
  const [stars, setStars] = useState<Search[]>([]);
  const [show, setShow] = useState(true);

  const openAll = useCallback((searches: Search[]) => {
    searches.forEach((s) => {
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

    const stars = (research?.searches ?? [])
      .map((s) => {
        return {
          ...s,
          results: starredResults(s.results),
        };
      })
      .filter((s) => Object.values(s.results).length > 0);

    setStars(stars);
  }, [research]);

  return {
    openAll,
    show,
    stars,
    toggle,
  };
};
