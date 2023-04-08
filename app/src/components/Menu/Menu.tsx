import React from "react";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { home, cart, trash } from "ionicons/icons";

const Menu: React.FC = () => {
  return (
    <IonMenu side="start" type="overlay" contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonMenuToggle>
            <IonTitle>Menu</IonTitle>
          </IonMenuToggle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList lines="none">
          <IonMenuToggle>
            <IonItem routerLink="/home">
              <IonIcon icon={home} slot="start" className="ion-padding" />
              <IonLabel>Home</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="/bought">
              <IonIcon icon={cart} slot="start" className="ion-padding" />
              <IonLabel>Bought</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="/removed">
              <IonIcon icon={trash} slot="start" className="ion-padding" />
              <IonLabel>Removed</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
