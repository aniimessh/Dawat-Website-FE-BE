import React from "react";
import { Navitems } from "../../data/main";
import { Link, useLocation } from "react-router-dom";

const MobileMenu = ({setOpenMenu}) => {
  const location = useLocation();
  return (
    <div className="absolute top-12 z-50 bg-white w-full">
      <nav>
        <ul className="gap-x-6 flex-col ">
          {Navitems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                onClick={() => setOpenMenu(false)}
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
    </div>
  );
};

export default MobileMenu;
