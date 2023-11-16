import React from 'react';
import UsersProvider from './Store/UsersApi/UsersProvider';
import {
  Home
} from './components/index'

function App() {
  return (
    <UsersProvider>
      <div className="app">
        <Home />
      </div>
    </UsersProvider>
  );
}

export default App;
