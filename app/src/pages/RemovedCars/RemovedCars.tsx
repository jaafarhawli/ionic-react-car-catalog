import { useContext } from "react";
import { IonContent, IonPage } from "@ionic/react";
import { RemovedCarsContext } from "../../context/RemovedCarsContext";
import { CarCard, Title } from "../../components";

const RemovedCars: React.FC = () => {
  const { removedCars } = useContext(RemovedCarsContext);

  return (
    <IonPage>
      <Title title="Removed Cars" />
      <IonContent fullscreen>
        {removedCars.map((car) => {
          return <CarCard key={car.id} car={car} />;
        })}
      </IonContent>
    </IonPage>
  );
};

export default RemovedCars;
