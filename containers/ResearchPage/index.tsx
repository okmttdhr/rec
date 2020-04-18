import * as React from 'react';
import { useQueryForm } from './hooks/useQueryForm';
import { useResultListActions } from './hooks/useResultListActions';
import { useResearch } from './hooks/useResearch';
import { useRouter } from 'next/router';
import { useSearchListActions } from './hooks/useSearchListActions';
import { SearchList } from './SearchList';
import { MainLayout } from 'layouts/Main';
import { useNotes } from './hooks/useNotes';
import { Notes } from './Notes';
import { useStarList } from './hooks/useStarList';
import { StarList } from './StarList';
import { QueryForm } from 'components/organisms/QueryForm';

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

  return (
    <MainLayout>
      <QueryForm {...queryFormState}></QueryForm>
      <h1>Research for &quot;{research?.name}&quot;</h1>
      <Notes {...notesState}></Notes>
      <StarList {...starListState} resultActionsState={resultActionsState}></StarList>
      <SearchList {...searchListState} resultActionsState={resultActionsState}></SearchList>
    </MainLayout>
  );
};
