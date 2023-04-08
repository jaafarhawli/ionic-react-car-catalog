import { createContext, useState, useEffect } from "react";
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
  const storedRemovedCars = localStorage.getItem("removedCars");
  const initialRemovedCars = storedRemovedCars
    ? JSON.parse(storedRemovedCars)
    : [];
  const [removedCars, setRemovedCars] = useState<Car[]>(initialRemovedCars);

  const addToRemovedCars = (removedCar: Car) => {
    setRemovedCars([...removedCars, removedCar]);
    localStorage.setItem(
      "removedCars",
      JSON.stringify([...removedCars, removedCar])
    );
  };

  useEffect(() => {
    const storedRemovedCars = localStorage.getItem("removedCars");
    if (storedRemovedCars) {
      setRemovedCars(JSON.parse(storedRemovedCars));
    }
  }, []);

  return (
    <RemovedContext.Provider value={{ removedCars, addToRemovedCars }}>
      {children}
    </RemovedContext.Provider>
  );
};

export default RemovedContextProvider;
