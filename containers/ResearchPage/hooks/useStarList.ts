import { useEffect, useState, useCallback } from 'react';
import { Results, Research, Searches, Search } from 'types/research';

export const useStarList = (research: Research) => {
  const [stars, setStars] = useState<Searches>({});
  const [show, setShow] = useState(true);

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
    stars,
    show,
    toggle,
  };
};
