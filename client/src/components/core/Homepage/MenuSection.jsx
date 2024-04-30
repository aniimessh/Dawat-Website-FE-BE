import MenuCards from "./MenuCards";
import { MenuItems } from "../../../data/main";

const MenuSection = () => {
  return (
    <div className="w-10/12 m-auto p-10">
      <div className="text-center ">
        <h1 className="font-bold text-5xl font-philospher">Browse Our Menu</h1>
      </div>
      <div className="md:flex-row flex justify-around gap-x-6 mt-10 flex-col">
        {
            MenuItems.map((item, index) => {
                return (
                    <MenuCards item={item} iconName={item.icon} key={index} />
                )
            })
        }
      </div>
    </div>
  );
};

export default MenuSection;
