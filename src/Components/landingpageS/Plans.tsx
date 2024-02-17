import React ,{useState} from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { RxDotFilled } from 'react-icons/rx';
import Plan from "../landingpageC/Plan";

const Plans = () => {
  const plans = [
    {
      id: 1,
      title: "Free",
      price: "Free",
      per: "Free of charge for everyone",
      list: [
        "personal accounts",
        "10links",
        "Import phone xontact and google contact",
        "Insights",
        "Share your profile online and offline",
        "Access to spinet services section",
        "Lead capture",
        "Upload links and files",
      ],
    },
    {
      id: 2,
      title: "Pro",
      price: "3000 DA ",
      per: "per year",
      list: [
        "Two profiles personal and business profile",
        "Unlimited links",
        "Unlimited transfers (classic business cards to Spinet profiles using AI )",
        "Export CSV",
        "Upload files (pdf, CV, Menu)",
        "Manage Up to 10 kid profiles",
        "Add Widget",
        "Customize QR code",
        "Add your business logo",
      ],
    },
    {
      id: 3,
      title: "Business",
      price: "Contact sales",
      per: "for more info, contact sales",
      list: [
        "Digital business cards for the entire team",
        "Multiple administrators",
        "Support for multiple divisions",
        "Add,remove,activate and deactivate members",
        "CRM integration",
        "Add a subdomain",
        "View all contacts on map",
        "Priority support via email and zoom",
      ],
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToSlide = (slideIndex : number) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div id="plans" className="flex flex-col items-center py-5 gap-y-3">
      <div className="text-xl md:text-5xl font-bold inline-flex flex-row items-center gap-x-2 md:gap-x-3 ">
        <div>
          <p>Check </p>
        </div>
        <p>our plans</p>
      </div>
      <div className=" hidden lg:flex  md:grid-row-3 gap-8 justify-between mx-16 ">
        {plans.map((plan) => (
          <Plan 
          title={plan.title}
          price={plan.price}
          per={plan.per}
          list={plan.list} />
        ))}
      </div>
      <div className="lg:hidden ">
        
        <Plan 
         title={plans[currentIndex].title}
         price={plans[currentIndex].price}
         per={plans[currentIndex].per}
         list={plans[currentIndex].list} />
          
      <div className='flex top-4 justify-center py-2'>
        {plans.map((plan, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Plans;
