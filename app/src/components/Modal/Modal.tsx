import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent,  } from '@ionic/react'

type Props = {
    isOpen: boolean,
    onClose: () => void,
    title: string,
    children: any
}

const Modal = (props: Props) => {
  return (
    <IonModal isOpen={props.isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>{props.title}</IonTitle>
              <IonButtons slot="end">
                <IonButton color="danger" onClick={() => props.onClose()}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            {props.children}
          </IonContent>
        </IonModal>
  )
}

export default Modal