import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonText,
  IonButton,
} from "@ionic/react";
import { Car } from "../../context/Cars";

type Props = {
  car: Car;
  onBuy?: (car: Car) => void;
  onRemove?: (car: Car) => void;
};

const CarCard = (props: Props) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.car.name}</IonCardTitle>
        <IonCardSubtitle>{props.car.model}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <IonText>
          <p>{props.car.description}</p>
        </IonText>
        <IonText>
          <p>{props.car.year}</p>
        </IonText>
      </IonCardContent>
      {props.onBuy && <IonButton fill="clear" color="success" onClick={() => props.onBuy ? props.onBuy(props.car) : null}>Buy</IonButton>}
      {props.onRemove && <IonButton fill="clear" color="danger" onClick={() => props.onRemove? props.onRemove(props.car) : null}>
        Remove
      </IonButton>}
    </IonCard>
  );
};


export default CarCard;
