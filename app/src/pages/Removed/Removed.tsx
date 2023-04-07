import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import ExploreContainer from "../../components/ExploreContainer";
  import "./Removed.css";
  
  const Removed: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Removed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>   
          <ExploreContainer />
        </IonContent>
      </IonPage>
    );
  };

export default Removed