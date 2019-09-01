import React from 'react';
import Global from './styles/global';
import Login from './pages/Login';
import Routes from './routes';
function App() {
  return (
    <>
      <Routes>
        <Login />
      </Routes>
      <Global />
    </>
  );
}

export default App;
