import { Link } from "react-router-dom";
import heroImage from "../assets/heroimage.jfif";
import MenuSection from "../components/core/Homepage/MenuSection";
import HomePageAbout from "../components/core/Homepage/HomePageAbout";
import ServiceSection from "../components/core/Homepage/ServiceSection";
import DeliveryImage from "../assets/delivery.jfif";
import Zomato from "../assets/zomato.png"
import Swiggy from "../assets/swiggy.png"

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
          <h1 className="text-white text-6xl md:w-3/5 w-screen text-center m-auto font-philospher">
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
      <section>
        <ServiceSection />
      </section>
      <section className="w-10/12 m-auto my-20">
        <div className="md:flex md:flex-row flex-col justify-between">
          <div>
            <img
              src={DeliveryImage}
              alt=""
              className="h-[600px] rounded-lg object-contain"
            />
          </div>
          <div className="flex-1 flex justify-center items-start flex-col max-w-max">
            <p className="font-bold font-philospher text-6xl w-3/5 text-left">
              Fastest Food delivery in the city.
            </p>
            <div className="w-8/12 text-left mt-5">
              <p>
                Delightful dishes delivered promptly to your doorstep for
                effortless enjoyment anytime, anywhere.
              </p>
            </div>
            <div className="flex gap-x-4 mt-10">
            <button>
              <img src={Zomato} alt="" className="h-[50px]" />
            </button>
            <button>
              <img src={Swiggy} alt=""   className="h-[50px]"/>
            </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
