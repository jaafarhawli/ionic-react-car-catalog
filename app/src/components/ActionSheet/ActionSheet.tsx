import { IonActionSheet } from "@ionic/react"

type Props = {
    action: string,
    isOpen: boolean,
    onDismiss: () => void,
    handler: () => void
}

const ActionSheet = (props: Props) => {
  return (
    <IonActionSheet
        header={`Are you sure you want to ${props.action} this car?`}
        isOpen={props.isOpen}
        onDidDismiss={props.onDismiss}
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
          },
          {
            text: `${props.action === "buy" ? "Buy" : "Remove"}`,
            handler: props.handler,
            role: `${props.action === "buy" ? "Buy" : "Destructive"}`
          },
        ]}
      />
  )
}

export default ActionSheet