import React ,{useState}from 'react' ;
import { BsCheck2Circle } from "react-icons/bs";
 
interface Props {
  question: string;
  answer: string;
  
}

const Question : React.FC<Props> = (props) =>  {
    const [isOpen,setIsOpen]=useState(false) ;
    const handelChange=()=>{
      setIsOpen(!isOpen)
    }
  return (
    <div>
    <div className=' bg-white rounded-lg border px-5 md:px-10 py-7 border-gray-400  text-base md:text-lg  font-medium' onClick={handelChange}>
     <div className={` flex flex-row justify-between  py-3   ${isOpen ?  " text-blue-600" :"text-black"} `}>  <p> {props.question}</p>
     {isOpen ? <BsCheck2Circle className=" align-middle h-6 w-6 " /> :<BsCheck2Circle className=" align-middle h-6 w-6 " />} </div>
       <p className={` ${isOpen ?  'text-gray-500' :'hidden' }`}> {props.answer} </p>
    </div>

    </div>
  )
}

export default Question