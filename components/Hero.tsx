"use client"

import Image from "next/image";
import CustomButton from "./CustomButton";


const Hero = () => {
    const handleScroll = ()=>{

    }
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          "Discover, Reserve, and Drive - Effortlessly and Swiftly"
        </h1>
        <p className="hero__subtitle">
          Enhance Your Rental Experience with Our Effortless Booking for
          Ultimate Convenience.
        </p>
        <CustomButton title='Explore Cars' containerStyles='bg-primary-blue text-white rounded-full mt-10' handleClick={handleScroll} />
      </div>
      {/* <div className="hero__image-container">
        < div className="hero__image">
            <Image src='/hero_car.png' alt="hero" fill className="object-contain" />
            <div className="hero__image-overlay" />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
