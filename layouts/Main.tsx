import Head from 'next/head';
import * as React from 'react';

export const MainLayout: React.FC<{}> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Rec</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link rel="manifest" href="/static/manifest.json" />
      </Head>
      {children}
    </div>
  );
};
