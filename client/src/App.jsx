import { Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import SocialMediaBar from "./components/common/SocialMediaBar";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";

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
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
