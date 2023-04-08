import React from "react";
import { IonHeader, IonToolbar, IonMenuButton, IonTitle } from "@ionic/react";

type Props = {
  title: String;
};

const Title = (props: Props) => {
  return (
    <IonHeader>
      <IonToolbar style={{ padding: "10px" }} color="primary">
        <IonMenuButton slot="start" />
        <IonTitle>{props.title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Title;
