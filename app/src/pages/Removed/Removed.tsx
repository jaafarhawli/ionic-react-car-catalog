import { IonContent, IonPage } from "@ionic/react";
import "./Removed.css";
import Title from "../../components/Title/Title";

const Removed: React.FC = () => {
  return (
    <IonPage>
      <Title title="Removed" />
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default Removed;
