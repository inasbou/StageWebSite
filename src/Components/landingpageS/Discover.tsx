import React from "react";

const Discover = () => {
  return (
    <div className="w-full inline-flex flex-col items-center py-10">
      <div className="text-xl md:text-5xl font-bold inline-flex flex-row items-center gap-x-2 md:gap-x-3 ">
        <div>
          <p>Discover </p>
        </div>
        <p>more spinet</p>
      </div>

      <iframe
        className=" w-2/3 h-[250px]  md:h-[550px] rounded-lg "
        src="https://www.youtube.com/embed/M0TGMH2Xeig"
        title="SPINET  c'est quoi la pièce spinet-ماهي شريحة سبينات"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Discover;
