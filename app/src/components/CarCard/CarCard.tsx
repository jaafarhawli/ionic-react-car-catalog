import { useState } from "react";
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
import ActionSheet from "../ActionSheet/ActionSheet";

type Props = {
  car: Car;
  onBuy?: (car: Car) => void;
  onRemove?: (car: Car) => void;
};

const CarCard = (props: Props) => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [action, setAction] = useState<string>("");

  const handleRemove = () => {
    setAction("remove");
    setShowActionSheet(true);
  };

  const handleConfirmRemove = () => {
    setShowActionSheet(false);
    if (props.onRemove) {
      props.onRemove(props.car);
    }
  };

  const handleBuy = () => {
    setAction("buy");
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
      <ActionSheet
        onDismiss={handleCancel}
        isOpen={showActionSheet}
        action={action}
        handler={action === "buy" ? handleConfirmBuy : handleConfirmRemove}
      />
    </>
  );
};

export default CarCard;
