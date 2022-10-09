import "./App.css";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import Home from "./PortfolioContainer/Home/Home";
import Resume from "./PortfolioContainer/Resume/Resume";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PortfolioContainer />
    </div>
  );
}

export default App;
