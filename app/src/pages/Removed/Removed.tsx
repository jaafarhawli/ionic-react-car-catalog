import { IonContent, IonPage } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./Removed.css";
import Title from "../../components/Title/Title";

const Removed: React.FC = () => {
  return (
    <IonPage>
      <Title title="Removed" />
      <IonContent fullscreen>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Removed;
