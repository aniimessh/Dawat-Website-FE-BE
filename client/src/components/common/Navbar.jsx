import { Navitems } from "../../data/main";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="w-10/12 m-auto py-2">
      <div className="flex justify-between items-center">
        <p className="font-bold text-2xl font-philospher">Dawat</p>
        <nav>
          <ul className="flex gap-x-6">
            {Navitems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.link}
                    className={`${
                      location.pathname === item.link
                        ? " bg-[#d9d9d9] rounded-lg "
                        : ""
                    } font-semibold p-1`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button className="border p-1 rounded-xl border-black">
          Book a Table
        </button>
      </div>
    </div>
  );
};

export default Navbar;
