import Cards from "components/Cards/Cards";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import CardsProvider from "providers/Cards/CardsProviders";

const App = () => {
  return (
    <CardsProvider>
      <div className="page-content">
        <Sidebar />
        <Cards />
      </div>
    </CardsProvider>
  );
};

export default App;
