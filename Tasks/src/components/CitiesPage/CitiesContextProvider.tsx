import { createContext, ReactNode } from "react";

export type City = {
  name: string;
  population: number;
  location: {
    continent: string;
    country: string;
  };
  touristAttractions: string[];
  isCapital: boolean;
};

export const CityContext = createContext<City[]>([]);

const CityContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const ctxValue: City[] = [
    {
      name: "Vilnius",
      population: 500000,
      location: { continent: "Europe", country: "Lithuania" },
      touristAttractions: ["Gedimino pilis"],
      isCapital: true,
    },
    {
      name: "Kaunas",
      population: 295000,
      location: { continent: "Europe", country: "Lithuania" },
      touristAttractions: ["Laisvės alėja", "Kauno pilis"],
      isCapital: false,
    },
    {
      name: "Paris",
      population: 2148000,
      location: { continent: "Europe", country: "France" },
      touristAttractions: ["Eifelio bokštas", "Luvras"],
      isCapital: true,
    },
    {
      name: "Tokyo",
      population: 13929286,
      location: { continent: "Asia", country: "Japan" },
      touristAttractions: ["Sensoji šventykla", "Tokijo bokštas"],
      isCapital: true,
    },
    {
      name: "New York",
      population: 8419600,
      location: { continent: "North America", country: "USA" },
      touristAttractions: ["Laisvės statula", "Times Square"],
      isCapital: false,
    },
  ];

  return (
    <CityContext.Provider value={ctxValue}>{children}</CityContext.Provider>
  );
};

export default CityContextProvider;
