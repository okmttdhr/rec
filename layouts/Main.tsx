import styled from '@emotion/styled';
import Head from 'next/head';
import * as React from 'react';
import { mq } from 'styles';

export const MainLayout: React.FC<{}> = ({ children }) => {
  return (
    <Layout>
      <Head>
        <title>Rec</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link rel="manifest" href="/static/manifest.json" />
      </Head>
      {children}
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  ${mq.lg} {
    width: 50%;
    margin: auto;
  }
`;
