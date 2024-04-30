import { Navitems } from "../../data/main";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  const showMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <div className="w-10/12 m-auto py-2">
      <div className="flex justify-between items-center">
        <p className="font-bold text-2xl font-philospher">Dawat</p>
        <nav>
          <ul className="gap-x-6 md:flex hidden">
            {Navitems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.link}
                    className={`${
                      location.pathname === item.link
                        ? "  opacity-100 rounded-lg "
                        : "opacity-60"
                    } font-semibold p-1`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex gap-x-5 items-center">
          <button className="border p-1 rounded-xl border-black">
            <Link to="/book-a-table">Book a Table</Link>
          </button>
          {openMenu ? (
            <div onClick={() => showMenu()}><IoMdClose fontSize={30}/></div>
          ) : (
            <div className="md:hidden block" onClick={() => showMenu()}>
              <RxHamburgerMenu fontSize={30} />
            </div>
          )}
          {openMenu && <MobileMenu setOpenMenu={setOpenMenu} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
