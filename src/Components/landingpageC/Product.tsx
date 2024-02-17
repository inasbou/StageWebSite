import React from 'react'

interface Props {
  title: string;
  description: string;
  price: string;
  src: string;
  isCol:boolean ;
}
const ProductCol : React.FC<Props> = (props) => {
  return (
    <div>
{ props.isCol  ?

<div className="lg:w-[450px] md:w-[600px]  bg-white md:min-w-full flex items-center  rounded-md p-2 flex-col "
            
            >
              <div className="min-w-[180px] w-[180px] h-[200px] grid">
                <img alt="product" className="w-full transition-all my-auto"  src={props.src}/>
              </div>
              <div className="h-[90%] mx-2 my-3 inline-flex flex-col items-start justify-between gap-y-4">
        <div className=' h-[240px]'>
          <p className="font-bold text-[1.4em] font-neutral-100">
            {props.title}
          </p>
          <p className="font-base text-sm t">
            {props.description}
          </p>
        </div>
        <div className="min-w-fit inline-flex flex-row items-center gap-x-4 ">
          <button className="w-fit h-fit px-4 py-3 border-[1px] border-neutral-30 text-neutral-400 font-semibold text-md rounded-md">
            Order now
          </button>
          <p className="font-bold text-lg text-black">{props.price}</p>
        </div>
      </div>
          </div> : <div
      className=" w-fit  p-1 mx-2  md:w-[650px] md:min-w-full  bg-white   inline-flex items-center  rounded-md md:p-3 flex-col md:flex-row"
      >
      <div className="min-w-[180px] w-[180px] h-[200px] grid">
        <img
          alt="product"
          className="w-full transition-all my-auto"
          src={props.src}
        />
      </div>
      <div className=" w-3/5 mx-2 my-3 inline-flex flex-col items-start justify-between gap-y-4">
        <div className=" h-[240px]">
          <p className="font-bold text-xl font-neutral-100">
            {props.title}
          </p>
          <p className="font-base text-sm ">
            {props.description}
          </p>
        </div>
        <div className="min-w-fit inline-flex flex-row items-center gap-x-4 ">
          <button className="w-fit h-fit px-4 py-3 border-[1px] border-neutral-30 text-neutral-400 font-semibold text-sm rounded-md">
            Order now
          </button>
          <p className="font-bold text-lg text-black">{props.price}</p>
        </div>
      </div>
    </div> }
    </div>
  )
}

export default ProductCol