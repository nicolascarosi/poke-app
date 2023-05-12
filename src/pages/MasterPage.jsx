import { Home } from '.';

import { Header } from '@/layout';

export const MasterPage = () => {
  return (
    <>
      <Header />
      <main className="master-page">
        <div className="wrapper">
          <Home />
        </div>
      </main>
    </>
  );
};
