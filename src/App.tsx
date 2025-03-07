
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Breeds from "./pages/Breeds";
import Favorites from "./pages/Favorites";
import ErrorPage from "./pages/ErrorPage";

const App = () => (
  <BrowserRouter>
    <div>
      <h1>Header</h1>
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