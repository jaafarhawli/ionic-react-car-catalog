import { IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';

type Props = {
    onSelect: (year: number) => void
}

const YearsSelectList = (props: Props) => {

    const yearOptions = [];

    for (let year = 2000; year <= 2012; year++) {
      yearOptions.push(<IonSelectOption key={year} value={year}>{year}</IonSelectOption>);
    }

  return (
    <IonList>
      <IonItem>
        <IonSelect aria-label="Year" interface="action-sheet" placeholder="Select Year" onIonChange={(e) => props.onSelect(e.detail.value)}>
          {yearOptions}
        </IonSelect>
      </IonItem>
    </IonList>
  )
}

export default YearsSelectList