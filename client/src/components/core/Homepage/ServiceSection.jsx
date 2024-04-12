import { ServiceCardDetails } from "../../../data/main";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  return (
    <div className="w-10/12 m-auto my-20">
      <div>
        <h1 className="font-philospher font-bold text-5xl">
          We also offers unique services for your events
        </h1>
      </div>
      <div className="flex justify-between mt-5 gap-x-6">
        {ServiceCardDetails.map((item, index) => {
          return <ServiceCard item={item} key={index}/>;
        })}
      </div>
    </div>
  );
};

export default ServiceSection;
