
import { useContext } from "react";
import { IonContent, IonPage } from "@ionic/react";
import "./Removed.css";
import Title from "../../components/Title/Title";
import { RemovedContext } from "../../context/RemovedContext";
import CarCard from "../../components/CarCard/CarCard";


const Removed: React.FC = () => {
  
  const {removedCars} = useContext(RemovedContext) 

  return (
    <IonPage>
      <Title title="Removed Cars" />
      <IonContent fullscreen>
        {removedCars.map((car) => {
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

export default Removed;
