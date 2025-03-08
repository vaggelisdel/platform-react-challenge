
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Breeds from "./pages/Breeds/Breeds";
import Favorites from "./pages/Favorites/Favorites";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header/Header";

import { Provider } from "react-redux";
import store  from "./redux/store";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
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
  </Provider>
);

export default App;