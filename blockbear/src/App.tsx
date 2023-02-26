import React from 'react';
import './App.css';
import ConnectWallet from './pages/authentication/connectWallet';
import AccountPage from './pages/profile/account-page';
import Test from './pages/profile/test';

function App() {
  return (
    <div className="App">
      <ConnectWallet></ConnectWallet>
    </div>
  );
}

export default App;
