import { useState } from "react";
import { menuData } from "../data/main";
import BrunchItem from "../components/core/MenuPage/BrunchItem";
import StarterItem from "../components/core/MenuPage/StarterItem";
import DrinksItem from "../components/core/MenuPage/DrinksItem";
import DessertItems from "../components/core/MenuPage/DessertItems";

const MenuPage = () => {
  const [selectedMenu, setSelectedMenu] = useState("Starter");
  const handleMenuChange = (e) => {
    setSelectedMenu(e.target.value);
  };
  return (
    <div>
      <div className="w-10/12 m-auto my-10">
        <h1 className="font-philospher text-6xl text-center font-bold">
          Our Menu
        </h1>
        <p className="text-center md:w-1/3 w-full m-auto">
          "Explore our diverse menu, brimming with delectable options to
          tantalize your taste buds and satisfy your cravings."
        </p>
      </div>
      <div className="md:w-1/3 w-full px-5 m-auto">
        <div className="flex justify-between">
          {menuData.map((item, index) => (
            <div>
              <input
                type="radio"
                name="menu"
                id={item.id}
                value={item.value}
                onChange={handleMenuChange}
                className="appearance-none"
              />
              <label
                htmlFor={item.id}
                className={`font-philospher ${
                  selectedMenu === item.value
                    ? "opacity-100 underline"
                    : "opacity-50"
                } cursor-pointer`}
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
        <div>
          {selectedMenu === "Starter" && <StarterItem />}
          {selectedMenu === "Main Course" && <BrunchItem />}
          {selectedMenu === "Drinks" && <DrinksItem />}
          {selectedMenu === "Dessert" && <DessertItems/>}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
