import React from "react";
import * as Icons from "react-icons/md";
import { Link } from "react-router-dom";

const MenuCards = ({ item, iconName }) => {
  const Icon = Icons[iconName];
  return (
    <div className="border p-5 m-auto rounded-lg hover:-translate-y-4 duration-200 ease-in-out hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <Icon className="text-4xl w-full" />
      <p className="text-center font-semibold text-gray-500">{item.title}</p>
      <p className="text-center">{item.subtitle}</p>
      <div className="w-full flex mt-5 justify-center">
      <button className="text-red-600 font-bold">
        <Link to={item.linkto}>Explore Menu</Link>
      </button>
      </div>
    </div>
  );
};

export default MenuCards;
