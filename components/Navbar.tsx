"use client";
import { useState, useEffect, useContext, Fragment } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { AppContext } from "./AppContainer";
import { ThemeContext } from "./ThemeProvider";

export const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [mobile, setMobile] = useState<boolean>(false);
  const [navbarblur, setNavbarBlur] = useState<boolean>(false);

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { setIsBlur } = useContext(AppContext);

  const handleTheme = (pickedTheme: string) => {
    setToggle((prev) => !prev);
    toggleTheme(pickedTheme);
  };

  const handleMobileMenu = () => {
    setIsBlur((prev) => !prev);
    setMobile((prev) => !prev);
  };

  useEffect(() => {
    if (theme === "dark-theme") {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }, [theme]);

  useEffect(() => {
    const handleBlurOnScroll = () => {
      setNavbarBlur(window.scrollY >= 30);
    };
    window.addEventListener("scroll", handleBlurOnScroll);
    handleBlurOnScroll();

    return () => window.removeEventListener("scroll", handleBlurOnScroll);
  }, []);

  return (
    <Fragment>
      <nav
        className={`fixed top-0 left-0 flex items-center justify-between w-full px-10 py-4 bg-transparent text-white z-40 ${
          navbarblur ? "backdrop-blur-md" : ""
        }`}
      >
        <div>
          <a href="#hero">
            <h3 className="logo-gradient font-bold text-[1.5rem] font-poppins">
              DANDEV
            </h3>
          </a>
        </div>

        <div
          className={`block cursor-pointer space-y-1 mobile-icon-rotation z-50 relative md:hidden`}
          onClick={() => handleMobileMenu()}
        >
          <span
            className={`bg-theme-switch w-7 h-0.5 block transition-all ${
              mobile ? "rotate-45" : "rotate-0"
            }`}
          ></span>
          <span
            className={`bg-theme-switch w-5 h-0.5 block transition-all ${
              mobile ? "-rotate-45 w-7 absolute -top-[3.6px]" : "rotate-0"
            }`}
          ></span>
          <span
            className={`bg-theme-switch w-3 h-0.5 block transition-all ${
              mobile ? "opacity-0" : "opacity-1"
            }`}
          ></span>
        </div>

        <div
          className={`${
            mobile ? "right-0" : "right-[-1000px]"
          } absolute top-0 flex flex-col bg-mobile w-[300px] 
          shadow-2xl h-screen py-5 items-center justify-center gap-10 transition-all md:static md:flex-row md:h-fit md:w-fit md:bg-inherit md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-10 text-primary text-sm font-semibold">
            <li onClick={mobile ? () => handleMobileMenu() : undefined}>
              <a href="#about">About</a>
            </li>
            <li onClick={mobile ? () => handleMobileMenu() : undefined}>
              <a href="#work">Work</a>
            </li>
            <li onClick={mobile ? () => handleMobileMenu() : undefined}>
              <a href="#contact">Contact</a>
            </li>
            <li onClick={mobile ? () => handleMobileMenu() : undefined}>
              <a href="/cv.pdf" target="_blank">
                Resume
              </a>
            </li>
          </ul>
          <div className="border-primary border-2 flex items-center justify-between gap-3 cursor-pointer relative p-1 rounded-[18px] w-[55px]">
            <BsFillMoonFill
              className="text-moon"
              onClick={() => handleTheme("dark-theme")}
            />
            <BsFillSunFill
              className="text-yellow-400"
              onClick={() => handleTheme("light-theme")}
            />
            <div
              className={`bg-theme-switch w-5 h-5 rounded-full absolute left-[3px] transition-all ${
                toggle ? "translate-x-[26px]" : ""
              }`}
            />
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
