import { Link } from "react-router-dom";
import heroImage from "../assets/heroimage.jfif";
import MenuSection from "../components/core/Homepage/MenuSection";
import HomePageAbout from "../components/core/Homepage/HomePageAbout";

const HomePage = () => {
  return (
    <div>
      <div className=" relative">
        <img
          src={heroImage}
          alt=""
          className="h-[700px] w-screen object-cover"
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2">
          <h1 className="text-white text-6xl w-3/5 text-center m-auto">
            Best Food For Your Taste
          </h1>
          <p className="text-white text-md text-center w-10/12 m-auto mt-4">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>
          <div className="mt-10 flex justify-around">
            <button className="bg-[#c71f1f] px-6 py-4 rounded-xl text-white border border-black">
              <Link to="/book-a-table"> Book a Table </Link>
            </button>
            <button className="bg-[#fff] px-6 py-4 rounded-xl text-black border border-black">
              Explore More
            </button>
          </div>
        </div>
      </div>
      <div>
        <MenuSection />
      </div>
      <section>
        <HomePageAbout />
      </section>
    </div>
  );
};

export default HomePage;
