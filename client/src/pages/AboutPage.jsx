import AboutImage from "../assets/about-image.jfif";

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
    </div>
  );
};

export default AboutPage;
