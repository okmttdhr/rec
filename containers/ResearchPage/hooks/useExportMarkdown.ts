import { saveAs } from 'file-saver';
import { pipe } from 'fp-minimal';
import { useCallback } from 'react';
import { Research, Results, Search } from 'types/research';

const starResults = (results: Results) => {
  return Object.values(results).reduce((accR, result) => {
    const link = `[${result.title}](${result.link})`;
    const bold = (t: string) => `**${t}**`;
    const bullet = (t: string) => `- ${t}
`;
    const acc = (t: string) => accR.concat(t);
    return pipe(bold, bullet, acc)(link);
  }, '');
};

const searchResults = (results: Results) => {
  return Object.values(results).reduce((accR, result) => {
    const link = `[${result.title}](${result.link})`;
    const bold = (t: string) => (result.star ? `**${t}**` : t);
    const bullet = (t: string) => `- ${t}
`;
    const acc = (t: string) => accR.concat(t);
    return pipe(bold, bullet, acc)(link);
  }, '');
};

export const text = (research: Research, stars: Search[]) =>
  ''
    .concat(
      `# Research for "${research.name}"

${research.notes}

`,
    )
    .concat(
      `## Stars

`,
    )
    .concat(
      stars.reduce((accS, star) => {
        return accS.concat(`${starResults(star.results)}`);
      }, ''),
    )
    .concat(
      `
`,
    )
    .concat(
      research.searches.reduce((accS, search) => {
        return accS.concat(`## ${search.q}

${searchResults(search.results)}
`);
      }, ''),
    );

export const useExportMarkdown = (research: Research, stars: Search[]) => {
  const exportMarkdown = useCallback(() => {
    const t = text(research, stars);
    const blob = new Blob([t], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, `${research.name}.md`);
  }, [research, stars]);

  return {
    exportMarkdown,
  };
};
