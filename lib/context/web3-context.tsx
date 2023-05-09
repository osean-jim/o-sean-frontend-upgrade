import { createContext, useContext } from 'react';

const Web3Context = createContext(null);

export const useWeb3Context = () => {
  const context = useContext(Web3Context);

  if (context === null) {
    throw new Error('useWeb3Context must be used within a Web3ContextProvider');
  }

  return context;
};

export const Web3ContextProvider = ({ children } : { children: React.ReactNode }) => {
  return <Web3Context.Provider value={null}>{children}</Web3Context.Provider>;
};