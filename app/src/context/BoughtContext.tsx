import { createContext, useState } from "react";
import { Car } from "./Cars";

interface BoughtContextInterface {
  boughtCars: Car[];
  buyCar: (newCars: Car) => void;
}

interface Props {
  children: React.ReactNode;
}

export const BoughtContext = createContext<BoughtContextInterface>({
  boughtCars: [],
  buyCar: () => {},
});

export const BoughtContextProvider = ({ children }: Props) => {
  const [boughtCars, setBoughtCars] = useState<Car[]>([]);

  const buyCar = (newCar: Car) => {
    setBoughtCars([...boughtCars, newCar]);
  };

  return (
    <BoughtContext.Provider value={{ boughtCars, buyCar }}>
      {children}
    </BoughtContext.Provider>
  );
};

export default BoughtContextProvider;
