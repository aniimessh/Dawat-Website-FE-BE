import HeroAboutImage from "../../../assets/homepage-about.jfif";
import { Link } from "react-router-dom";

const HomePageAbout = () => {
  return (
    <div className="w-10/12 m-auto my-10">
      <div className="flex gap-x-4">
        <div className="">
          <img
            src={HeroAboutImage}
            alt=""
            className="h-[500px] rounded-lg object-cover"
          />
        </div>
        <div className="flex-1 flex justify-center items-center flex-col">
          <p className="font-bold font-philospher text-6xl w-2/3 text-center">
            We provide healthy food for your family.
          </p>
          <div className="w-8/12 text-center mt-5">
            <p>
              Embrace wellness without compromising on flavor at our restaurant,
              where fresh ingredients and mindful cooking unite in delicious,
              nutritious dishes.
            </p>
            <br />
            <p>
              Indulge in a culinary journey where every bite delights the senses
              and nourishes the body, leaving you feeling energized and
              satisfied.
            </p>
          </div>
          <button className="mt-5 border border-black rounded-lg text-gray-500 font-semibold px-5 py-4">
            <Link to="/about-us">More About Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePageAbout;
