import React from "react";

const HowWork = () => {
   const liste=[
   {id:1 ,
     title: "Get a product"   ,
    description:"Get a spinet product that works best for you and start your journey",
    src:"/images/get_product.png",
    button:"shop now"
   }, {id:2 ,
    title: "Download our app"   ,
   description:"Download our mobile application that is available for both Android and iOS",
   src:"/images/download_app.png",
   button:"Download the app"
  }, {id:3 ,
    title: "Activate your sticker"   ,
   description:"Activate your product and link it with your profile",
   src:"/images/activate_sticker.png" ,
   button:"Activate my sticker"
  }, {id:4 ,
    title: "Share your profile"   ,
   description:"Share your QR code and start the journey by adding contacts",
   src:"/images/share_profile.png",
   button:"Scan QR Code"
  },

    ]
  return (
    <div className="flex flex-col items-center py-5 gap-y-3">
      <div className="text-xl md:text-5xl font-bold inline-flex flex-row items-center gap-x-2 md:gap-x-3 ">
        <div>
          <p>Check </p>
        </div>
        <p>our features</p>
      </div>
      <div className="flex flex-col  md:flex-row gap-12 md:mx-16 ">
       {liste.map((listElement ,key=listElement.id)=>( 
       <div className=" flex flex-col items-center">
      <img  src={listElement.src} alt={listElement.title}   />
       <h1 className=" text-2xl font-medium">{listElement.title}</h1>
       <p className=" text-center text-md">{listElement.description}</p>
       <button className="w-fit h-fit px-4 py-3 border-[1px] border-neutral-300 hover:bg-blue-500 hover:text-white text-gray-600 font-semibold  text-md rounded-md flex  justify-center">
              {listElement.button}
            </button>
      </div>))}

      </div>
    </div>
  );
};

export default HowWork;
