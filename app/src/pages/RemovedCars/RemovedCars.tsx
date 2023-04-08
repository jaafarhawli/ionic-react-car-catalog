import { useContext } from "react";
import { IonContent, IonPage } from "@ionic/react";
import { RemovedCarsContext } from "../../context/RemovedCarsContext";
import { CarCard, Title } from "../../components";

const RemovedCars: React.FC = () => {
  const { removedCars } = useContext(RemovedCarsContext);

  return (
    <IonPage>
      <Title title="Removed Cars" />
      {removedCars.length <= 0 ? (
        <IonContent fullscreen className="ion-padding ion-text-center">
          <p>No cars removed</p>
        </IonContent>
      ) : (
        <IonContent fullscreen>
          {removedCars.map((car) => (
            <CarCard key={car.id} car={car} cardType="removed" />
          ))}
        </IonContent>
      )}
    </IonPage>
  );
};

export default RemovedCars;
