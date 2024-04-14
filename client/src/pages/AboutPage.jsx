import AboutImage from "../assets/about-image.jfif";
import AboutBgImage from "../assets/about-bg.jfif";
import { aboutPageDetails, moreAboutPageDetails } from "../data/main";
import AboutCard from "../components/core/Aboutpage/AboutCard";

const AboutPage = () => {
  return (
    <div className="mt-10">
      <div className="flex w-10/12 m-auto gap-x-5">
        <div className="">
          <img
            src={AboutImage}
            alt=""
            className="h-[450px] w-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-center flex-1">
          <p className="font-philospher font-bold text-6xl w-2/3 text-center">
            We provide healthy food for your family.
          </p>
          <p className="mt-5 w-1/2 text-center">
            Embrace wellness without compromising on flavor at our restaurant,
            where fresh ingredients and mindful cooking unite in delicious,
            nutritious dishes.
          </p>
          <p className="mt-4 w-1/2 text-center">
            Indulge in a culinary journey where every bite delights the senses
            and nourishes the body, leaving you feeling energized and satisfied.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <img
          src={AboutBgImage}
          alt=""
          className="h-[500px] w-full object-cover"
        />
      </div>
      <div className="w-10/12 m-auto my-10">
        <div className="flex justify-between w-4/5 m-auto gap-x-6">
          {aboutPageDetails.map((item, index) => {
            return <AboutCard item={item} iconName={item.icon} />;
          })}
        </div>
      </div>
      <div className="w-10/12 m-auto my-10">
        <p className="font-philospher text-6xl font-bold text-center">
          More About Us
        </p>
        <div className="flex justify-between">
          {moreAboutPageDetails.map((item, index) => {
            return (
              <div className="rounded-lg bg-gray-300 p-5 mt-5 text-center">
                <p className="text-xl font-bold text-gray-500 drop-shadow-xl">{item.number}</p>
                <p className="text-lg font-semibold text-gray-700 ">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
