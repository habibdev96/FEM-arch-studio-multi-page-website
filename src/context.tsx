import React, { createContext, useState, useContext } from 'react';
import { linksData, carouselData, portfolioCardData } from './data';
import { ILinksData, ICarouselData, IPortfolioCardData } from './interfaces';

const useValue = () => {
  const [links, setLinks] = useState<ILinksData[]>(linksData);
  const [carouselSlides, setCarouselSlides] =
    useState<ICarouselData[]>(carouselData);
  const [portfolioCards, setPortfolioCards] =
    useState<IPortfolioCardData[]>(portfolioCardData);

  return {
    links,
    setLinks,
    carouselSlides,
    setCarouselSlides,
    portfolioCards,
    setPortfolioCards,
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
