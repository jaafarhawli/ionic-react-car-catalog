import { useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonText,
  IonButton,
  IonActionSheet,
} from "@ionic/react";
import { Car } from "../../context/Cars";

type Props = {
  car: Car;
  onBuy?: (car: Car) => void;
  onRemove?: (car: Car) => void;
};

const CarCard = (props: Props) => {
  const [showActionSheet, setShowActionSheet] = useState(false);

  const handleRemove = () => {
    setShowActionSheet(true);
  };

  const handleConfirmRemove = () => {
    setShowActionSheet(false);
    if (props.onRemove) {
      props.onRemove(props.car);
    }
  };

  const handleBuy = () => {
    setShowActionSheet(true);
  };

  const handleConfirmBuy = () => {
    setShowActionSheet(false);
    if (props.onBuy) {
      props.onBuy(props.car);
    }
  };

  const handleCancel = () => {
    setShowActionSheet(false);
  };

  return (
    <>
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

        {props.onBuy && (
          <IonButton fill="clear" color="success" onClick={handleBuy}>
            Buy
          </IonButton>
        )}

        {props.onRemove && (
          <IonButton fill="clear" color="danger" onClick={handleRemove}>
            Remove
          </IonButton>
        )}
      </IonCard>

      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={handleCancel}
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
          },
          {
            text: "Buy",
            handler: handleConfirmBuy,
          },
          {
            text: "Remove",
            role: "destructive",
            handler: handleConfirmRemove,
          },
        ]}
      />
    </>
  );
};

export default CarCard;

