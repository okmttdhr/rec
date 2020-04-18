import { QueryForm } from 'components/organisms/QueryForm';
import { MainLayout } from 'layouts/Main';
import * as React from 'react';

import { useQueryForm } from './hooks/useQueryForm';
import { useResearchList } from './hooks/useResearchList';
import { ResearchList } from './ResearchList';

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
