import React from "react";

const Support = () => {
  return (
    <div id="support" className="flex flex-col items-center py-5 gap-y-3 bg-black">
      <div className="text-xl md:text-5xl font-bold inline-flex flex-row items-center gap-x-2 md:gap-x-3 ">
        <p>our support center</p>
      </div>
      <div className="flex flex-col gap-4 w-full  px-8  md:px-32  ">
        <div className="flex md:flex-row flex-col gap-4">
          <div className="flex flex-col md:w-1/2">
            <label className="text-white "> Full name *</label>
            <input
              className=" p-1 md:p-4 bg-white rounded-lg "
              placeholder="Your full name"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col md:w-1/2">
            <label className="text-white "> Email adress *</label>
            <input
              className="p-1 md:p-4 bg-white  rounded-lg"
              placeholder="Your email"
              type="email"
              required
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4">
          <div className="flex flex-col md:w-1/2">
            <label className="text-white "> Phone</label>
            <input
              className=" p-4 bg-white  rounded-lg"
              placeholder="Your phone number"
              type="number"
             
            />
          </div>
          <div className="flex flex-col md:w-1/2">
            <label className="text-white "> Country</label>
            <input
              className=" p-4 bg-white  rounded-lg"
              placeholder="Country"
              type="text"
             
            /></div>
            </div>
            <div className="flex flex-col ">
              <label className="text-white "> What is your question ?</label>
              <input
                className=" p-4 bg-white  rounded-lg"
                placeholder="Your question"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col ">
              <label className="text-white "> Your notes ?</label>
              <input
                className=" p-4 bg-white  rounded-lg"
                placeholder="Your notes"
                type="text"
                
              />
            
          
        </div>
        <button className=" rounded-lg bg-blue-600 p-4 text-white my-3">Submit</button>
      </div>
    </div>
  );
};

export default Support;
