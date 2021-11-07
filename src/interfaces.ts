export interface ILinksData {
  id: number;
  text: string;
  path: string;
}

export interface ICarouselData {
  id: number;
  bg: StaticImageData;
  title: string;
  description: string;
}

export interface IButtonProps {
  text: string;
  path: string;
}

export interface IPortfolioCardData {
  id: number;
  bg: StaticImageData;
  title: string;
  date: string;
  isFeatured: boolean;
  featureNumber?: string;
}
