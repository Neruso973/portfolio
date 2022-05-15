import { Link } from "@remix-run/react";
import { useState } from "react";

import logo from "../../../public/img/Logo.svg";
import logoRevert from "..././../public/img/LogoRevert.svg";

function Navbar() {
  const [isHover, setisHover] = useState<Boolean>(false);

  const revert = () => {
    setisHover(true);
  };

  const base = () => {
    setisHover(false);
  };

  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav
      className={`navbar ${
        showLinks ? "showNav" : "hideNav"
      } h-screen w-[15%] bg-white`}
    >
      <Link to="/login">
        <img
          src={!isHover ? logo : logoRevert}
          alt="logo de Nelson"
          className="mx-auto mt-24 mb-12 w-[90%] "
          onMouseOver={() => revert()}
          onMouseLeave={() => base()}
        />
      </Link>
      <div className="flex flex-col place-content-around justify-center">
        <div className="navbar-bot">
          <div className="navLinks">
            <div className="flex-col">
              <ul className="cursor-pointer flex-col text-center text-2xl text-white">
                <li className="mx-auto my-14 h-11 w-[80%] cursor-pointer rounded-full bg-[#0073DD] py-1 text-white transition-all duration-300 ease-in-out hover:scale-110">
                  <Link to="/">Accueil</Link>
                </li>
                <li className="mx-auto my-14 h-11 w-[80%] cursor-pointer rounded-full bg-[#0073DD] py-1 text-white transition-all duration-300 ease-in-out hover:scale-110">
                  <Link to="/about">A Propos</Link>
                </li>
                <li className="mx-auto my-14 h-11 w-[80%] cursor-pointer rounded-full bg-[#0073DD] py-1 text-white transition-all duration-300 ease-in-out hover:scale-110">
                  <Link to="/skills">Compétences</Link>
                </li>
                <li className="mx-auto my-14 h-11 w-[80%] cursor-pointer rounded-full bg-[#0073DD] py-1 text-white transition-all duration-300 ease-in-out hover:scale-110">
                  <Link to="/projects">Portfolio</Link>
                </li>
                <li className="mx-auto my-14 h-11 w-[80%] cursor-pointer rounded-full bg-[#0073DD] py-1 text-white transition-all duration-300 ease-in-out hover:scale-110">
                  <Link to="/cv">Curiculum</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button type="button" className="navBurger" onClick={handleShowLinks}>
          <span className="burgerBar" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
