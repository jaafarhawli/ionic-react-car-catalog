import { Redirect, Route } from "react-router-dom";
import { IonApp, IonContent, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import BottomTabs from "./components/BottomTabs/BottomTabs";
import Menu from "./components/Menu/Menu";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./App.css";
import BoughtContextProvider from "./context/BoughtContext";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <BoughtContextProvider>
        <IonReactRouter>
          <Menu />
          <IonContent id="main">
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route
              path={["/home", "/bought", "/removed"]}
              component={BottomTabs}
            />
          </IonContent>
        </IonReactRouter>
      </BoughtContextProvider>
    </IonApp>
  );
};

export default App;
