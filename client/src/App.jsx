import { Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import SocialMediaBar from "./components/common/SocialMediaBar";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import Footer from "./components/common/Footer";
import TableReservationPage from "./pages/TableReservationPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div>
      <div className="bg-[#404040]">
        <SocialMediaBar />
      </div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/book-a-table" element={<TableReservationPage />} />
          <Route path="/about-us" element={<AboutPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
