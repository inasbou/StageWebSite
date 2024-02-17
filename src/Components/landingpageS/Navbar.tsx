import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="w-full h-fit md:h-[100px] inline-flex flex-row transition-all items-center justify-between md:justify-evenly px-6 md:px-0 py-5 md:py-2 fixed top-0 z-40 bg-white">
        <div>
          <img
            className="h-[20px] md:[40px]"
            src="/images/logo_expanded.svg"
            alt="spinet logo"
          />
        </div>
        <div className="hidden md:inline-flex flex-row items-center gap-x-6">
          <a
            aria-current="page"
            href="/"
            className="router-link-active router-link-exact-active  font-medium text-neutral-400 text-md "
          >
            Spinet for teams
          </a>
          <a className="font-medium text-neutral-400 text-md" href="#plans">
            Pricing
          </a>
          <a className="font-medium text-neutral-400 text-md" href="#features">
            Features
          </a>
          <a
            aria-current="page"
            href="/"
            className="router-link-active router-link-exact-active  text-neutral-400 font-medium"
          >
            Our apps
          </a>
          <a className="font-medium text-neutral-400 text-md" href="#support">
            Support
          </a>
        </div>
        <button className="h-[56px] hidden md:block px-10 bg-blue-600 rounded-md font-medium text-md text-white cursor-pointer">
          <a href="https://play.google.com/store/apps/details?id=com.spinet.spinetnfc">
            Download our app
          </a>
        </button>
        {isOpen ? (
          <div className="w-full h-screen bg-blue-600/80 fixed z-50 top-0 bottom-0 right-0 left-0 backdrop-blur-[2px] inline-flex flex-col items-end transition-all">
            <img
              src="/icons/close_menu.svg"
              alt=""
              className="h-[32px] w-[32px] m-4"
              onClick={() => setIsOpen(false)}
            />
            <div className="w-full inline-flex flex-col items-center gap-y-5">
              <img
                src="/images/logo_expanded_white.svg"
                alt=""
                className="w-1/2 my-3"
              />
              <a
                aria-current="page"
                href="/"
                className="router-link-active router-link-exact-active font-semibold text-white text-xl"
              >
                Spinet for teams
              </a>
              <a className="font-semibold text-white text-xl" href="#plans">
                Pricing
              </a>
              <a className="font-semibold text-white text-xl" href="#features">
                Features
              </a>
              <a
                aria-current="page"
                href="/"
                className="router-link-active router-link-exact-active font-semibold text-white text-xl"
              >
                Our apps
              </a>
              <a className="font-semibold text-white text-xl" href="#support">
                Support
              </a>
              <button className="h-[56px] px-10 bg-white rounded-md font-semibold text-ulg text-neutral-80 cursor-pointer">
                Download our app
              </button>
            </div>
          </div>
        ) : (
          <img
            className="md:hidden h-5"
            src="/icons/menu.svg"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
