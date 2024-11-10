import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Salnik59002 from "./components/Salnik59002/Salnik59002";
import Salnik59003 from "./components/Salnik59003/Salnik59003";
import TMM1803 from "./components/TMM1803/TMM1803";
import S59052608 from "./components/S59052608/S59052608";
import SellingFree from "./components/sellingFree/sellingFree";
import KL3903 from "./components/KL3903/KL3903";
import CompanyInfo from "./components/companyInfo/companyInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainPage/>}
        />
        <Route 
          path="/salnik_nabivnoy/"
          element={<Salnik59002/>}
        />
        <Route 
          path="/salnik_najimnoy/"
          element={<Salnik59003/>}
        />
        <Route 
          path="/salnik_tmm_18_03/"
          element={<TMM1803/>}
        />
        <Route 
          path="/s-5-905-26-08/"
          element={<S59052608/>}
        />
        <Route 
          path="/распродажа-сальников-со-склада/"
          element={<SellingFree/>}
        />
        <Route 
          path="/s_3_903_kl13_vip_0_1/"
          element={<KL3903/>}
        />
        <Route 
          path="/about_us/"
          element={<CompanyInfo/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// map
// responsive

// https://www.figma.com/design/TH6l582c9eJBljmpYjWLQW/%D0%9D%D0%9A%D0%9E-%D0%9D%D0%BE%D1%87%D0%BB%D0%B5%D0%B6%D0%BA%D0%B0-%7C-%D0%9F%D0%B5%D1%81%D0%BE%D1%87%D0%BD%D0%B8%D1%86%D0%B0?node-id=1-17&node-type=&t=bDsq5J1EqYIJz6S8-0
// Lights of background building animates
// Typing animation
