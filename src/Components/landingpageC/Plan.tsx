import React from "react";
import { BsCheck2Circle } from "react-icons/bs";

interface Props {
  title: string;
  price: string;
  per: string;
  list: string[];
}
const Plan: React.FC<Props> = (props) => {
  return (
    <div className=" flex justify-center">
      <div className=" bg-white border border-blue-600  max-w-[90%] md:w-full hover:shadow-2xl  hover:border-0  flex flex-col gap-y-5 lg:w-[550px]   p-10 text-black hover:text-blue-600 rounded-lg ">
        <p className=" text-2xl font-semibold ">{props.title}</p>
        <p className=" text-4xl font-bold  ">{props.price}</p>
        <p className=" text-base ">{props.per}</p>
        {props.list.map((listEle) => (
          <div className="inline-flex flex-row gap-4">
            <BsCheck2Circle className=" align-middle h-6 w-6 " />
            <p className="  text-lg font-medium "> {listEle}</p>
          </div>
        ))}
        <button className="w-fit h-fit px-4 py-3 border-[1px] border-neutral-300 hover:bg-blue-500 hover:text-white text-gray-600 font-semibold text-md rounded-md flex  justify-center">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Plan;
