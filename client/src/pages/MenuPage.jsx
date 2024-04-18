import ItemTable from "../components/core/MenuPage/ItemTable";
import { MenuCardItems } from "../data/main";

const MenuPage = () => {
  return (
    <div>
      <div className="w-10/12 m-auto my-10">
        <h1 className="font-philospher text-6xl text-center font-bold">
          Our Menu
        </h1>
        <p className="text-center w-1/3 m-auto">
          "Explore our diverse menu, brimming with delectable options to
          tantalize your taste buds and satisfy your cravings."
        </p>
      </div>
      <div className="flex gap-x-4 flex-wrap">
        <div className="flex-1">
          <h1 className="text-3xl font-philospher font-bold text-center">Starter</h1>
          <table className=" text-center w-full">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
            {MenuCardItems.map((item) => {
              return (
                <tr className="">
                  <td>
                    <img
                      src={item.image}
                      alt=""
                      className="h-[200px] rounded-lg aspect-square object-cover m-auto"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>Rs. {item.price}</td>
                </tr>
              );
            })}
          </table>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-philospher font-bold text-center">Main Course</h1>
          <table className=" text-center w-full">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
            {MenuCardItems.map((item) => {
              return (
                <tr className="">
                  <td>
                    <img
                      src={item.image}
                      alt=""
                      className="h-[200px] rounded-lg aspect-square object-cover m-auto"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>Rs. {item.price}</td>
                </tr>
              );
            })}
          </table>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-philospher font-bold text-center">Non-Veg Starter</h1>
          <table className=" text-center w-full">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
            {MenuCardItems.map((item) => {
              return (
                <tr className="">
                  <td>
                    <img
                      src={item.image}
                      alt=""
                      className="h-[200px] rounded-lg aspect-square object-cover m-auto"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>Rs. {item.price}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
