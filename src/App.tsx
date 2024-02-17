import Cards from "components/Cards/Cards";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="page-content">
      <Sidebar />
      <Cards/>
    </div>
  );
};

export default App;
