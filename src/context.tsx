import React, { createContext, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (): void => console.log('hello world');

  const handleMobileMenuClose = (): void => setIsMobileMenuOpen(false);

  return {
    links,
    setLinks,
    carouselSlides,
    setCarouselSlides,
    portfolioCards,
    setPortfolioCards,
    leaders,
    setLeaders,
    handleSubmit,
    register,
    errors,
    onSubmit,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    handleMobileMenuClose,
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
