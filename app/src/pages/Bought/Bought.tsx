import { IonContent, IonPage } from "@ionic/react";
import "./Bought.css";
import Title from "../../components/Title/Title";
import { useContext } from "react";
import { BoughtContext } from "../../context/BoughtContext";
import CarCard from "../../components/CarCard/CarCard";

const Bought: React.FC = () => {
  
  const {boughtCars} =useContext(BoughtContext);
  
  return (
    <IonPage>
      <Title title="Bought" />
      <IonContent fullscreen>
      {boughtCars.map((car) => {
          return (
            <CarCard
              key={car.id}
              car={car}
            />
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default Bought;
