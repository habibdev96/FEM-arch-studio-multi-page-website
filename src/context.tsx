import React, { createContext, useState, useContext } from 'react';
import { linksData, carouselData } from './data';
import { ILinksData, ICarouselData } from './interfaces';

const useValue = () => {
  const [links, setLinks] = useState<ILinksData[]>(linksData);
  const [carouselSlides, setCarouselSlides] =
    useState<ICarouselData[]>(carouselData);

  return {
    links,
    setLinks,
    carouselSlides,
    setCarouselSlides,
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
