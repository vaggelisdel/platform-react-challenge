
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Breeds from "./pages/Breeds";
import Favorites from "./pages/Favorites";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header/Header";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);

export default App;