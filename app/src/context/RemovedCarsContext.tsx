import { createContext, useState, useEffect } from "react";
import { Car } from "./Cars";

interface RemovedContextInterface {
  removedCars: Car[];
  addToRemovedCars: (removedCar: Car) => void;
}

interface Props {
  children: React.ReactNode;
}

export const RemovedCarsContext = createContext<RemovedContextInterface>({
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
    <RemovedCarsContext.Provider value={{ removedCars, addToRemovedCars }}>
      {children}
    </RemovedCarsContext.Provider>
  );
};

export default RemovedContextProvider;
