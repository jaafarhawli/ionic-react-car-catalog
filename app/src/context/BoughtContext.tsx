import { createContext, useState, useEffect } from "react";
import { Car } from "./Cars";

interface BoughtContextInterface {
  boughtCars: Car[];
  addToBoughtCars: (newCar: Car) => void;
}

interface Props {
  children: React.ReactNode;
}

export const BoughtContext = createContext<BoughtContextInterface>({
  boughtCars: [],
  addToBoughtCars: () => {},
});

export const BoughtContextProvider = ({ children }: Props) => {
  const storedBoughtCars = localStorage.getItem("boughtCars");
  const initialBoughtCars = storedBoughtCars
    ? JSON.parse(storedBoughtCars)
    : [];
  const [boughtCars, setBoughtCars] = useState<Car[]>(initialBoughtCars);

  const addToBoughtCars = (newCar: Car) => {
    setBoughtCars([...boughtCars, newCar]);
    localStorage.setItem("boughtCars", JSON.stringify([...boughtCars, newCar]));
  };

  useEffect(() => {
    const storedBoughtCars = localStorage.getItem("boughtCars");
    if (storedBoughtCars) {
      setBoughtCars(JSON.parse(storedBoughtCars));
    }
  }, []);

  return (
    <BoughtContext.Provider value={{ boughtCars, addToBoughtCars }}>
      {children}
    </BoughtContext.Provider>
  );
};

export default BoughtContextProvider;
