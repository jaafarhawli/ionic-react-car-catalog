import { IonContent, IonPage } from "@ionic/react";
import { CarCard, Title } from "../../components";
import { useContext } from "react";
import { BoughtCarsContext } from "../../context/BoughtCarsContext";

const BoughtCars: React.FC = () => {
  const { boughtCars } = useContext(BoughtCarsContext);

  return (
    <IonPage>
      <Title title="Bought Cars" />
      {boughtCars.length <= 0 ? (
        <IonContent fullscreen className="ion-padding ion-text-center">
          <p>No cars removed</p>
        </IonContent>
      ) : (
        <IonContent fullscreen>
          {boughtCars.map((car) => (
            <CarCard key={car.id} car={car} cardType="bought" />
          ))}
        </IonContent>
      )}
    </IonPage>
  );
};

export default BoughtCars;
