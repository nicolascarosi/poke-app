import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, MasterPage } from '@/pages';
import { ROUTES } from '@/config';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.BASE} element={<MasterPage />}>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
