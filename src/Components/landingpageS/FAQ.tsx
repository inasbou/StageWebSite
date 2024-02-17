import React from "react";
import Question from "../landingpageC/Question";

const FAQ = () => {
  const questionsList = [
    {
      id: 1,
      question: "who does spinet work ",
      answer:
        " Spinet uses NFC (near field communication) and QR code to share spinet profiles. You can also share your profile by sharing your profile link. ",
    },
    {
      id: 2,
      question: "What kind of devices will it work with ",
      answer: "  Spinet works with the majority of smartphones in the market. ",
    },
    {
      id: 3,
      question: "My device does not support NFC ",
      answer:
        "  If your device does not support NFC you can simply use or scan the QR code. ",
    },
    {
      id: 4,
      question:
        "Should non spinet users install an app so they can interact with my profile ",
      answer:
        "  No,other users can easily view and interact with your spinet profile with our spinet app or via web. ",
    },
    {
      id: 5,
      question: " Can i save contacts when im offline",
      answer: "  Spinet users can save contacts even when they are offline. ",
    },
    {
      id: 6,
      question:
        " Can i import contacts in my device or my google account to my spinet profile ",
      answer:
        " Yes, device and google account contacts can be imported to spinet profiles.  ",
    },
  ];
  return (
    <div  className="flex flex-col mx-3 md:mx-16  my-5 gap-y-3">
      <div className="text-xl md:text-5xl font-bold inline-flex flex-row justify-center  gap-x-2 md:gap-x-3 ">
        <div>
          <p>Check </p>
        </div>
        <p>our features</p>
      </div>

      {questionsList.map((questionElem, key = questionElem.id) => (
        <div>
          <Question
            question={questionElem.question}
            answer={questionElem.answer}
          />
        </div>
      ))}
    </div>
  );
};

export default FAQ;
