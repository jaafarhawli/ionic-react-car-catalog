import { useContext, useState, useEffect } from "react";
import {
  IonContent,
  IonPage,
  IonIcon,
  IonButton,
  IonToolbar,
  IonButtons,
  IonToast,
} from "@ionic/react";
import { Title, CarCard, Modal, YearsSelectList } from "../../components";
import { CarsContext } from "../../context/CarsContext";
import { BoughtCarsContext } from "../../context/BoughtCarsContext";
import { RemovedCarsContext } from "../../context/RemovedCarsContext";
import { Car } from "../../context/Cars";
import { filterOutline } from "ionicons/icons";

const Home: React.FC = () => {
  const [search, setSearch] = useState(false);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [openToast, setOpenToast] = useState(false);
  const [toastAction, setToastAction] = useState("");
  const { cars, removeCarFromCarsArray } = useContext(CarsContext);
  const { addToBoughtCars } = useContext(BoughtCarsContext);
  const { addToRemovedCars } = useContext(RemovedCarsContext);

  const buyCar = (car: Car) => {
    addToBoughtCars(car);
    removeCarFromCarsArray(car.id);
    setToastAction("buy");
    setOpenToast(true);
  };

  const removeCar = (car: Car) => {
    addToRemovedCars(car);
    removeCarFromCarsArray(car.id);
    setToastAction("remove");
    setOpenToast(true);
  };

  const closeSearchModal = () => {
    setFilteredCars([]);
    setSearch(false);
  };

  const openSearchModal = () => {
    setSearch(true);
  };

  const selectYear = (year: number) => {
    setSelectedYear(year);
  };

  useEffect(() => {
    setFilteredCars(cars.filter((car) => car.year === selectedYear));
  }, [selectedYear, cars]);

  return (
    <IonPage>
      <Title title="Home" />
      <IonContent fullscreen>
        <Modal isOpen={search} onClose={closeSearchModal} title="Filter Cars">
          <YearsSelectList onSelect={selectYear} />
          {filteredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onBuy={buyCar}
              onRemove={removeCar}
            />
          ))}
        </Modal>
        <IonToolbar color="transparent">
          <IonButtons slot="end">
            <IonButton slot="end" onClick={openSearchModal}>
              <IonIcon icon={filterOutline} size="large" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} onBuy={buyCar} onRemove={removeCar} />
        ))}
        <IonToast
          isOpen={openToast}
          message={`${
            toastAction === "buy"
              ? "Car Bought Successfully"
              : "Car Removed Successfully"
          }`}
          color={`${toastAction === "buy" ? "success" : "danger"}`}
          onDidDismiss={() => setOpenToast(false)}
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;