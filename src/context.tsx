import React, { createContext, useState, useContext } from 'react';
import { linksData } from './data';
import { ILinksData } from './interfaces';

const useValue = () => {
  const [links, setLinks] = useState<ILinksData[]>(linksData);

  return {
    links,
  };
};

const GlobalStateContext = createContext({} as ReturnType<typeof useValue>);

export const GlobalStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <GlobalStateContext.Provider value={useValue()}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
