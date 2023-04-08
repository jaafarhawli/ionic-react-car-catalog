import { IonContent, IonPage } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./Bought.css";
import Title from "../../components/Title/Title";

const Bought: React.FC = () => {
  return (
    <IonPage>
      <Title title="Bought" />
      <IonContent fullscreen>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Bought;
