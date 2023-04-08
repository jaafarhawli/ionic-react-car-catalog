import { useContext, useState, useEffect } from "react";
import {
  IonContent,
  IonPage,
  IonIcon,
  IonButton,
  IonToolbar,
  IonButtons,
} from "@ionic/react";
import "./Home.css";
import Title from "../../components/Title/Title";
import CarCard from "../../components/CarCard/CarCard";
import { CarsContext } from "../../context/CarsContext";
import { BoughtContext } from "../../context/BoughtContext";
import { RemovedContext } from "../../context/RemovedContext";
import { Car } from "../../context/Cars";
import { filterOutline } from "ionicons/icons";
import Modal from "../../components/Modal/Modal";
import YearsSelectList from "../../components/YearsSelectList/YearsSelectList";

const Home: React.FC = () => {
  const [search, setSearch] = useState<boolean>(false);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const { cars, removeCarFromCarsArray } = useContext(CarsContext);
  const { addToBoughtCars } = useContext(BoughtContext);
  const { addToRemovedCars } = useContext(RemovedContext);

  const buyCar = (car: Car) => {
    addToBoughtCars(car);
    removeCarFromCarsArray(car.id);
  };

  const removeCar = (car: Car) => {
    addToRemovedCars(car);
    removeCarFromCarsArray(car.id);
  };

  const closeSearchModal = () => {
    setSearch(false);
  };

  const openSearchModal = () => {
    setSearch(true);
  };

  const selectYear = (year: number) => {
    setSelectedYear(year);
  };

  useEffect(() => {
    setFilteredCars(cars.filter((car) => car.year === selectedYear));
  }, [selectedYear, cars]);

  return (
    <IonPage>
      <Title title="Home" />
      <IonContent fullscreen>
        <Modal isOpen={search} onClose={closeSearchModal} title="Filter Cars">
          <YearsSelectList onSelect={selectYear} />
          {filteredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onBuy={buyCar}
              onRemove={removeCar}
            />
          ))}
        </Modal>
        <IonToolbar color="transparent">
          <IonButtons slot="end">
            <IonButton slot="end" onClick={openSearchModal}>
              <IonIcon icon={filterOutline} size="large" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
        {cars.map((car) => {
          return (
            <CarCard
              key={car.id}
              car={car}
              onBuy={buyCar}
              onRemove={removeCar}
            />
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default Home;
