import * as Icons from "react-icons/md";

const AboutCard = ({ item, iconName }) => {
  const Icon = Icons[iconName];
  return (
    <div className="flex gap-x-2">
      <div>
        <Icon className="text-4xl text-gray-500" />
      </div>
      <div className="">
        <p className="font-semibold">{item.title}</p>
        <p className="text-justify">{item.subtitle}</p>
      </div>
    </div>
  );
};

export default AboutCard;
