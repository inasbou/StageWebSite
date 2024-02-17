import React from 'react'
import Tilt from 'react-parallax-tilt';
interface Props {
   
    title: string;
    desc: string |undefined;
    src: string ; 
  }
export const Feature : React.FC<Props> = (props) => {
  return (
    <div
       
    className='w-full h-full rounded-2xl py-12  md:py-36 bg-center bg-cover duration-500 flex md:flex-row flex-col-reverse'
  > 
  <div className=' md:my-48  md:w-1/2 md:ml-10 justify-center flex flex-col'>
    <p className='text-xl font-bold uppercase text-blue-500'>Our features </p>
    <h1 className=' text-5xl font-bold'>{props.title}</h1>
  <p className=' text-lg'>{props.desc}</p>
  
  </div >
  <div className='md:w-1/2 flex justify-center'>
    <Tilt><img src={props.src} /></Tilt></div>
  </div>
  )
}
