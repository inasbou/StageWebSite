import React ,{useState} from "react";
import Product from "../landingpageC/Product";
import { RxDotFilled } from 'react-icons/rx';


const Products = () => {
  const products = [
    {
      id: 1,
      title: "Spinet sticker",
      description:
        "Spinet sticker, the fastest way to share your spinet profile and contact info since it sticks on the back of your phone so you can network anytime anywhere limitlessly.",
      src: "/images/sticker.png",
      price: "1500 DA",
      isCol: false,
    },
    {
      id: 2,
      title: "Spinet keychain",
      description:
        "Spinet keychain, has the same benefits as the sticker but the bonus point is that in case you lose your keys, the one who finds hem can reach out to you easily and you will have your keys back.",
      src: "/images/keychain.png",
      price: "2500 DA",
      isCol: false,
    },
    {
      id: 3,
      title: "Spinet business card",
      description:
        "If you are used to classic business cards,this one is for you, spinet digital business card is the best way to give the perfect first impression during a contact exchange.",
      src: "/images/busines_card.png",
      price: "3000 DA",
      isCol: true,
    },
    {
      id: 4,
      title: "Spinet display",
      description:
        "Spinet display it can be put on a stand during an event , your office or even inside a store,the fastest and most efficient way to share your contact info and impress your clients.",
      src: "/images/display.png",
      price: "4000 DA",
      isCol: true,
    },
    {
      id: 5,
      title: "Spinet XL",
      description:
        "Spinet XL is simply a larger version of spinet sticker but with the same benefits as spinet display.",
      src: "/images/sticker_xl.png",
      price: "3000 DA",
      isCol: true,
    },

    {
      id: 6,
      title: "Spinet band",
      description:
        "Spinet band is the smartest way to keep you networking tool with you all the time.",
      src: "/images/band.png",
      price: "3000 DA",
      isCol: false,
    },
    {
      id: 7,
      title: "Spinet kid band",
      description:
        "We thought of your kids too,spinet kid band is not a networking tool it is a tool to protect your kids in case of any harm others can reach out to you easily...",
      src: "/images/band.png",
      price: "1500 DA",
      isCol: false,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToSlide = (slideIndex : number) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="flex flex-col  bg-[#FBFAFF] items-center gap-y-3 py-5">
      <div className="text-xl md:text-5xl font-bold inline-flex flex-row items-center gap-x-2 md:gap-x-3 ">
        <div>
          <p>Some </p>
        </div>
        <p>spinet products</p>
      </div>
      <p className=" text-lg font-medium">
        Do not find customers for your products, Find products for your
        customers
      </p>
      

      <div className=" hidden md:inline-flex  md:flex-wrap lg:mx-36 justify-center md:mx-24 items-center my-7 gap-y-6 gap-x-3">
        {products.map((product) => (
          <div>
            <Product
              title={product.title}
              price={product.price}
              description={product.description}
              src={product.src}
              isCol={product.isCol}
            />
          </div>
        ))}
      </div>
      
      <div className=" md:hidden"> 
      <div>
            <Product
              title={products[currentIndex].title}
              price={products[currentIndex].price}
              description={products[currentIndex].description}
              src={products[currentIndex].src}
              isCol={false}
            />
          </div>
      
      <div className='flex top-4 justify-center py-2'>
        {products.map((product, slideIndex) => (
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

export default Products;
