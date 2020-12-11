import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import AuthContext from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Renan' }}>
      <SignIn />
    </AuthContext.Provider>

    <GlobalStyle />
  </>
);
export default App;
