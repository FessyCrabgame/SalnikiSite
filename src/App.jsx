import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainPage/>}
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
