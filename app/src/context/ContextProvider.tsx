import CarsContextProvider from "./CarsContext";
import RemovedContextProvider from "./RemovedCarsContext";
import BoughtContextProvider from "./BoughtCarsContext";

interface Props {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: Props) => {
  return (
    <CarsContextProvider>
      <RemovedContextProvider>
        <BoughtContextProvider>{children}</BoughtContextProvider>
      </RemovedContextProvider>
    </CarsContextProvider>
  );
};

export default ContextProvider;
