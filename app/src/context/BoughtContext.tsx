import { createContext, useState } from "react";
import { Car } from "./Cars";

interface BoughtContextInterface {
  boughtCars: Car[];
  addToBoughtCars: (newCars: Car) => void;
}

interface Props {
  children: React.ReactNode;
}

export const BoughtContext = createContext<BoughtContextInterface>({
  boughtCars: [],
  addToBoughtCars: () => {},
});

export const BoughtContextProvider = ({ children }: Props) => {
  const [boughtCars, setBoughtCars] = useState<Car[]>([]);

  const addToBoughtCars = (newCar: Car) => {
    setBoughtCars([...boughtCars, newCar]);
  };

  return (
    <BoughtContext.Provider value={{ boughtCars, addToBoughtCars }}>
      {children}
    </BoughtContext.Provider>
  );
};

export default BoughtContextProvider;
