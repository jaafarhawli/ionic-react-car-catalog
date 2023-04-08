import { createContext, useState } from "react";
import { Car, Cars } from "./Cars";

interface CarsContextInterface {
  cars: Car[];
  removeCarFromCarsArray: (carId: number) => void;
}

interface Props {
  children: React.ReactNode;
}

export const BoughtContext = createContext<CarsContextInterface>({
  cars: [],
  removeCarFromCarsArray: () => {},
});

export const CarsContextProvider = ({ children }: Props) => {
  const [cars, setCars] = useState<Car[]>(Cars);

  const removeCarFromCarsArray = (carId: number) => {
    const index = cars.findIndex(car => car.id === carId);
    if (index !== -1) {
      const newCars = [...cars];
      newCars.splice(index, 1);
      setCars(newCars);
    }
  };

  return (
    <BoughtContext.Provider value={{ cars, removeCarFromCarsArray }}>
      {children}
    </BoughtContext.Provider>
  );
};

export default CarsContextProvider;