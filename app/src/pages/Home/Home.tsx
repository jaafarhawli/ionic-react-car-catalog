import { useContext } from "react";
import { IonContent, IonPage } from "@ionic/react";
import "./Home.css";
import Title from "../../components/Title/Title";
import CarCard from "../../components/CarCard/CarCard";
import { CarsContext } from "../../context/CarsContext";

const Home: React.FC = () => {

  const { cars } = useContext(CarsContext);

  return (
    <IonPage>
      <Title title="Home" />
      <IonContent fullscreen>
        {
          cars.map(car => {
            return <CarCard key={car.id} name={car.name} description={car.description} model={car.model} year={car.year} />
          })
        }
      </IonContent>
    </IonPage>
  );
};

export default Home;
