import { createContext, useState } from "react";
import { Car } from "./Cars";

interface RemovedContextInterface {
  removedCars: Car[];
  addToRemovedCars: (removedCar: Car) => void;
}

interface Props {
  children: React.ReactNode;
}

export const RemovedContext = createContext<RemovedContextInterface>({
  removedCars: [],
  addToRemovedCars: () => {},
});

export const RemovedContextProvider = ({ children }: Props) => {
  const [removedCars, setRemovedCars] = useState<Car[]>([]);

  const addToRemovedCars = (removedCar: Car) => {
    setRemovedCars([...removedCars, removedCar]);
  };

  return (
    <RemovedContext.Provider value={{ removedCars, addToRemovedCars }}>
      {children}
    </RemovedContext.Provider>
  );
};

export default RemovedContextProvider;