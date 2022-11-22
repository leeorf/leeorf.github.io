import React from 'react';
import { Header } from '../shared/Header';

type PageLayoutProps = {
  children: React.ReactNode;
};

export const PageLayout = (props: PageLayoutProps): React.ReactElement => {
  const { children } = props;

  return (
    <main className="flex flex-col items-center">
      <div className="max-w-screen-xl self-stretch m-auto w-full px-6 py-6 sm:px-12">
        <Header />
        <article className="py-6">{children}</article>
      </div>
    </main>
  );
};
