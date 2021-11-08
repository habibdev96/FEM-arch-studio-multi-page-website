import React, { createContext, useState, useContext } from 'react';
import {
  linksData,
  carouselData,
  portfolioCardData,
  leadersData,
} from './data';
import {
  ILinksData,
  ICarouselData,
  IPortfolioCardData,
  ILeadersData,
} from './interfaces';

const useValue = () => {
  const [links, setLinks] = useState<ILinksData[]>(linksData);
  const [carouselSlides, setCarouselSlides] =
    useState<ICarouselData[]>(carouselData);
  const [portfolioCards, setPortfolioCards] =
    useState<IPortfolioCardData[]>(portfolioCardData);
  const [leaders, setLeaders] = useState<ILeadersData[]>(leadersData);

  return {
    links,
    setLinks,
    carouselSlides,
    setCarouselSlides,
    portfolioCards,
    setPortfolioCards,
    leaders,
    setLeaders,
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
