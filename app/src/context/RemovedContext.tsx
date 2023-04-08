import { createContext, useState } from "react";
import { Car } from "./Cars";

interface RemovedContextInterface {
  removedCars: Car[];
  removeCar: (removedCar: Car) => void;
}

interface Props {
  children: React.ReactNode;
}

export const BoughtContext = createContext<RemovedContextInterface>({
  removedCars: [],
  removeCar: () => {},
});

export const RemovedContextProvider = ({ children }: Props) => {
  const [removedCars, setRemovedCars] = useState<Car[]>([]);

  const removeCar = (removedCar: Car) => {
    setRemovedCars([...removedCars, removedCar]);
  };

  return (
    <BoughtContext.Provider value={{ removedCars, removeCar }}>
      {children}
    </BoughtContext.Provider>
  );
};

export default RemovedContextProvider;