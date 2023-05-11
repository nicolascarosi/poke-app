import { Outlet } from 'react-router-dom';

import { Header } from '@/layout';

export const MasterPage = () => {
  return (
    <>
      <Header />
      <main className="master-page">
        <div className="wrapper">
          <Outlet />
        </div>
      </main>
    </>
  );
};
