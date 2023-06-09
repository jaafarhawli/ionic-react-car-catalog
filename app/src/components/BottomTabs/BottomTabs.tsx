import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import { home, cart, trash } from "ionicons/icons";
import { Home, BoughtCars, RemovedCars } from "../../pages";

const BottomTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet animated={false}>
        <Redirect exact path="/" to="/home" />

        <Route path="/home" render={() => <Home />} exact={true} />
        <Route path="/bought" render={() => <BoughtCars />} exact={true} />
        <Route path="/removed" render={() => <RemovedCars />} exact={true} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="bought" href="/bought">
          <IonIcon icon={cart} />
          <IonLabel>Bought</IonLabel>
        </IonTabButton>
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="removed" href="/removed">
          <IonIcon icon={trash} />
          <IonLabel>Removed</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default BottomTabs;
