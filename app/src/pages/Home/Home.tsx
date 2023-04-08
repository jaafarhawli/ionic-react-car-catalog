import { useContext } from "react";
import { IonContent, IonPage, IonIcon, IonButton, IonToolbar, IonButtons } from "@ionic/react";
import "./Home.css";
import Title from "../../components/Title/Title";
import CarCard from "../../components/CarCard/CarCard";
import { CarsContext } from "../../context/CarsContext";
import { BoughtContext } from "../../context/BoughtContext";
import { RemovedContext } from "../../context/RemovedContext";
import { Car } from "../../context/Cars";
import { filterOutline } from 'ionicons/icons';

const Home: React.FC = () => {
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

  return (
    <IonPage>
      <Title title="Home" />
      <IonContent fullscreen>
      <IonToolbar color="transparent">
      <IonButtons slot="end">
        <IonButton slot="end">
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
