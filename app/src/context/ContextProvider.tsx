import CarsContextProvider from "./CarsContext";
import RemovedContextProvider from "./RemovedContext";
import BoughtContextProvider from "./BoughtContext";

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