import { useContext, useState } from "react";
import { IonContent, IonPage, IonIcon, IonButton, IonToolbar, IonButtons } from "@ionic/react";
import "./Home.css";
import Title from "../../components/Title/Title";
import CarCard from "../../components/CarCard/CarCard";
import { CarsContext } from "../../context/CarsContext";
import { BoughtContext } from "../../context/BoughtContext";
import { RemovedContext } from "../../context/RemovedContext";
import { Car } from "../../context/Cars";
import { filterOutline } from 'ionicons/icons';
import Modal from "../../components/Modal/Modal";

const Home: React.FC = () => {
  const [search, setSearch] = useState<boolean>(false);
  const [filteredCars, setFilteredCars] = useState<Car[]>([])
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

  const closeSearchModal =  () => {
    setSearch(false);
  }

  const openSearchModal = () => {
    setSearch(true);
  }

  return (
    <IonPage>
      <Title title="Home" />
      <IonContent fullscreen>
        <Modal isOpen={search} onClose={closeSearchModal} title="Filter Cars">
          Test
        </Modal>
      <IonToolbar color="transparent">
      <IonButtons slot="end">
        <IonButton slot="end"  onClick={openSearchModal}>
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
