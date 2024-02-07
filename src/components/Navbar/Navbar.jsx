import React from "react";
import { CiSearch } from "react-icons/ci";

const NavLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/",
  },
  {
    name: "Quick Look",
    link: "/",
  },
];
const Navbar = () => {
  return (
    <div className="py-4">
      <nav className="container flex justify-between items-center">
        {/* Logo section */}
        <div>
          {" "}
          <h1 className="text-2xl font-bold text-primary">NIU</h1>
        </div>

        {/* Navlinks Section */}
        <div>
          <ul className="flex items-center gap-4">
            {NavLinks.map((link) => {
              return (
                <li
                  key={link.name}
                  className="hover:border-b-2 hover:border-primary duration-200 font-semibold "
                >
                  {link.name}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Search Bar Section */}
        <div>
          <CiSearch />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
