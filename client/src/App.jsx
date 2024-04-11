import Navbar from "./components/common/Navbar";
import SocialMediaBar from "./components/common/SocialMediaBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className="bg-[#404040]">
        <SocialMediaBar />
      </div>
      <Navbar />
      <div>
        <HomePage />
      </div>
    </>
  );
}

export default App;
