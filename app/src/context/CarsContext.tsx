import { createContext, useState, useEffect } from "react";
import { Car, Cars } from "./Cars";

interface CarsContextInterface {
  cars: Car[];
  removeCarFromCarsArray: (carId: number) => void;
}

interface Props {
  children: React.ReactNode;
}

export const CarsContext = createContext<CarsContextInterface>({
  cars: [],
  removeCarFromCarsArray: () => {},
});

export const CarsContextProvider = ({ children }: Props) => {
  const storedCars = localStorage.getItem("cars");
  const initialCars = storedCars ? JSON.parse(storedCars) : Cars;
  const [cars, setCars] = useState<Car[]>(initialCars);

  const removeCarFromCarsArray = (carId: number) => {
    const index = cars.findIndex((car) => car.id === carId);
    if (index !== -1) {
      const newCars = [...cars];
      newCars.splice(index, 1);
      setCars(newCars);
      localStorage.setItem("cars", JSON.stringify(newCars));
    }
  };

  useEffect(() => {
    const storedCars = localStorage.getItem("cars");
    if (storedCars) {
      setCars(JSON.parse(storedCars));
    }
  }, []);

  return (
    <CarsContext.Provider value={{ cars, removeCarFromCarsArray }}>
      {children}
    </CarsContext.Provider>
  );
};

export default CarsContextProvider;
