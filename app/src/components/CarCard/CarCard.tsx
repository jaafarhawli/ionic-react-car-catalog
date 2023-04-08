import React from 'react'
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonText, IonButton } from '@ionic/react'

type Props = {
    name: string,
    model: string,
    description: string,
    year: number,
}

const CarCard = (props: Props) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.name}</IonCardTitle>
        <IonCardSubtitle>{props.model}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <IonText>
            <p>{props.description}</p>
        </IonText>
        <IonText>
            <p>{props.year}</p>
        </IonText>
      </IonCardContent>
      <IonButton fill="clear">Buy</IonButton>
      <IonButton fill="clear" color="danger">Remove</IonButton>
    </IonCard>
  )
}

export default CarCard