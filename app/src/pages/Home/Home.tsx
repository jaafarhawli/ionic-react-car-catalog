import {
  IonContent,
  IonPage,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./Home.css";
import Title from "../../components/Title/Title";

const Home: React.FC = () => {
  return (
    <IonPage>
      <Title title="Home" />
      <IonContent fullscreen>   
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
