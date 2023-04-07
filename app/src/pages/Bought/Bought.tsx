import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import ExploreContainer from "../../components/ExploreContainer";
  import "./Bought.css";
  
  const Bought: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Bought</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>   
          <ExploreContainer />
        </IonContent>
      </IonPage>
    );
  };

export default Bought