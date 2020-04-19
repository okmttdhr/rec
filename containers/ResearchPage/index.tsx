import { QueryForm } from 'components/organisms/QueryForm';
import { MainLayout } from 'layouts/Main';
import { useRouter } from 'next/router';
import * as React from 'react';

import { useExportMarkdown } from './hooks/useExportMarkdown';
import { useNotes } from './hooks/useNotes';
import { useQueryForm } from './hooks/useQueryForm';
import { useResearch } from './hooks/useResearch';
import { useResultListActions } from './hooks/useResultListActions';
import { useSearchListActions } from './hooks/useSearchListActions';
import { useStarList } from './hooks/useStarList';
import { Notes } from './Notes';
import { SearchList } from './SearchList';
import { StarList } from './StarList';

export const ResearchPageContainer: React.FC<{}> = () => {
  const {
    query: { id },
  } = useRouter();
  const { research, setResearches } = useResearch(id as string);
  const queryFormState = useQueryForm(research, setResearches);
  const notesState = useNotes(research, setResearches);
  const searchListState = useSearchListActions(research, setResearches);
  const resultActionsState = useResultListActions(research, setResearches);
  const starListState = useStarList(research);
  const { exportMarkdown } = useExportMarkdown(research, starListState.stars);

  return (
    <MainLayout>
      <QueryForm {...queryFormState}></QueryForm>
      <h1>Research for &quot;{research?.name}&quot;</h1>
      <Notes {...notesState}></Notes>
      <StarList {...starListState} resultActionsState={resultActionsState}></StarList>
      <SearchList {...searchListState} resultActionsState={resultActionsState}></SearchList>
      <button onClick={exportMarkdown}>Export as Markdown</button>
    </MainLayout>
  );
};
