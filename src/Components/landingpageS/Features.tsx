import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Feature } from "../landingpageC/Feature";

function Features() {
  const features = [
    {
      id: 1,
      title: "All in one ",
      description:
        " What do we live for if not to make life less difficult for each other ",
      src: "/images/all_in_one.png",
    },
    {
      id: 2,
      title: "Never lose connection",
      description:
        " What do we live for if not to make life less difficult for each other ",
      src: "/images/offline.png",
    },
    {
      id: 3,
      title: "Never forget about the leads",
      descripion:
        " Add all of your contact information and links ( social media links, phone numbers, emails,locations, websites, apps, portfolios in addition to PDF files,CV,menu).",

      src: "/images/offline2.png",
    },
    {
      id: 4,
      title: "Show what you are capable of  ",
      description:
        " What do we live for if not to make life less difficult for each other ",
      src: "/images/performance.png",
    },
    {
      id: 5,
      title: "Be unique ",
      description:
        "Add all of your contact information and links ( social media links, phone numbers, emails,locations, websites, apps, portfolios in addition to PDF files,CV,menu).",
      src: "/images/pro_perso.png",
    },
    {
      id: 6,
      title: "Offline, not a problem ",
      description:
        " What do we live for if not to make life less difficult for each other ",
      src: "/images/",
    },
    {
      id: 7,
      title: "Tack your performance ",
      description:
        "Add all of your contact information and links ( social media links, phone numbers, emails,locations, websites, apps, portfolios in addition to PDF files,CV,menu).",
      src: "/images/",
    },
    {
      id: 8,
      title: "Export CSV",
      description:
        "Add all of your contact information and links ( social media links, phone numbers, emails,locations, websites, apps, portfolios in addition to PDF files,CV,menu).",
      src: "/images/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? features.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === features.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div id="features" className="flex flex-col items-center py-5 gap-y-3">
      <div className="text-xl md:text-5xl font-bold inline-flex flex-row items-center gap-x-2 md:gap-x-3 ">
        <div>
          <p>Check </p>
        </div>
        <p>our features</p>
      </div>
      <div className="max-w-[1400px] h-[780px] w-full m-auto py-6 px-4   relative group">
        <Feature
          title={features[currentIndex].title}
          src={features[currentIndex].src}
          desc={features[currentIndex].description}
        />

        {/* Left Arrow */}
        <div className="hidden  group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-lg rounded-full p-2 bg-blue-600/60 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-lg rounded-full p-2 bg-blue-600/60 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {features.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
