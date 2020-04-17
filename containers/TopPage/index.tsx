import * as React from 'react';
import { QueryForm } from './QueryForm';
import { useQueryForm } from './hooks/useQueryForm';
import { useResearchList } from './hooks/useResearchList';
import { ResearchList } from './ResearchList';
import { MainLayout } from 'layouts/Main';

export const TopPageContainer: React.FC<{}> = () => {
  const researchListState = useResearchList();
  const queryFormState = useQueryForm(researchListState.setResearches);

  return (
    <MainLayout>
      <QueryForm {...queryFormState} />
      <ResearchList {...researchListState} />
    </MainLayout>
  );
};
