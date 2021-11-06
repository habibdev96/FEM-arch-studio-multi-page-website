import React, { createContext, useState, useContext } from 'react';
import { testData } from './data';
import { ITestData } from './interfaces';

const useValue = () => {
  const [data, setData] = useState<ITestData[]>(testData);

  return {
    data,
    setData,
  };
};

const GlobalStateContext = createContext({} as ReturnType<typeof useValue>);

const GlobalStateProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <GlobalStateContext.Provider value={useValue()}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateContext');
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };
