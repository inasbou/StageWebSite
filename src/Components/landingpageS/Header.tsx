import React from "react";

const Header = () => {
  return (
    <div  
     className="w-full bg-[url(/images/header_bg.png)]   min-h-screen inline-flex flex-col md:flex-row items-center bg-header-mobile md:bg-header bg-no-repeat bg-contain md:bg-cover bg-right-top px-[5%] md:px-[10%]  pt-[70px]">
      <div>
        <p className="md:text-2xl text-md  text-blue-600 font-bold uppercase p-0">
          Spinet one solution for all
        </p>
        <h1 className="font-bold text-5xl md:text-7xl my-5 md:my-2">
          Empower your network with spinet
        </h1>
        <div className="w-full my-3 md:my-0">
          <p className="text-md font-semibold text-grey-700">
            Empower your networking with a simple and easy digital way to
            instantly share your contact information or get others' contact
            information all at once.
          </p>
          <p className="text-md font-semibold text-grey-700">
            build your network and grow your business using our NFC based
            features.
          </p>
        </div>
        <div className="w-full inline-flex flex-col md:flex-row items-center md:gap-x-3 gap-y-3 my-6 md:my-4">
          <div className="h-fit md:w-fit w-4/5 bg-black rounded-md text-white grid items-center justify-center py-1 px-2">
            <div className="min-w-fit inline-flex flex-row items-center ">
              <img
                className="w-9 h-9 mr-3"
                src="/icons/appstore.svg"
                alt="img"
              />
              <div className="h-fit ">
                <p className="text-xs m-0">GET IT ON</p>
                <p className="font-semibold text-sm m-0">Google Play</p>
              </div>
            </div>
          </div>
          <div className="h-fit md:w-fit w-4/5 bg-black rounded-md text-white grid items-center justify-center py-1 px-2">
            <div className="min-w-fit inline-flex flex-row items-center">
              <img className="w-8 mr-3" src="/icons/apple.svg" />
              <div className="h-fit">
                <p className="text-xs m-0">Download on the</p>
                <p className="font-semibold text-umd m-0">App Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-[60%] md:w-[330px] my-4 md:m-0 object-cover"
        src="/images/spinet_mockup.png"
        alt="spinet-mockup"
      />
    </div>
  );
};

export default Header;
