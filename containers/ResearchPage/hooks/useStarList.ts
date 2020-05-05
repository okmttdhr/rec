import { useCallback, useEffect, useState } from 'react';
import { Research, Search } from 'types/research';

export const useStarList = (research: Research) => {
  const [stars, setStars] = useState<Search[]>([]);
  const [show, setShow] = useState(true);

  const openAll = useCallback((searches: Search[]) => {
    searches.forEach((s) => {
      s.results.forEach((r) => {
        window.open(r.link);
      });
    });
  }, []);

  const toggle = useCallback(() => {
    setShow((s) => !s);
  }, [setShow]);

  useEffect(() => {
    const stars = (research?.searches ?? [])
      .map((s) => ({ ...s, results: s.results.filter((r) => r.star) }))
      .filter((s) => s.results.length > 0);

    setStars(stars);
  }, [research]);

  return {
    openAll,
    show,
    stars,
    toggle,
  };
};
