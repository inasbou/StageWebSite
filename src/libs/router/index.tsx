import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "../../pages/Home";
import LandingPage from "../../pages/LandingPage";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default RouterConfig;
