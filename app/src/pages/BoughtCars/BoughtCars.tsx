import { IonContent, IonPage } from "@ionic/react";
import { CarCard, Title } from "../../components";
import { useContext } from "react";
import { BoughtCarsContext } from "../../context/BoughtCarsContext";

const BoughtCars: React.FC = () => {
  const { boughtCars } = useContext(BoughtCarsContext);

  return (
    <IonPage>
      <Title title="Bought Cars" />
      <IonContent fullscreen>
        {boughtCars.map((car) => {
          return <CarCard key={car.id} car={car} />;
        })}
      </IonContent>
    </IonPage>
  );
};

export default BoughtCars;
