import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import Slide1 from "../../../Assets/images/slide-1.png";
import Slide2 from "../../../Assets/images/slide-2.png";
import Slide3 from "../../../Assets/images/slide-3.png";
import LeftChevron from "../../../Assets/icons/left-chevron.svg";
import RightChevron from "../../../Assets/icons/right-chevron.svg";
import "swiper/swiper.min.css";

SwiperCore.use([Autoplay]);

const SliderControls = ({ swiperRef }) => (
  <div className="w-[95%] mx-auto relative z-10 top-[40%] flex justify-between">
    <div
      onClick={() => swiperRef.current.swiper.slidePrev()}
      className="cursor-pointer rounded-full bg-white md:w-10 w-8 h-8 md:h-10 flex justify-center items-center"
    >
      <img src={LeftChevron} alt="" />
    </div>
    <div
      onClick={() => swiperRef.current.swiper.slideNext()}
      className="cursor-pointer  rounded-full bg-white md:w-10 w-8 h-8 md:h-10 flex justify-center items-center"
    >
      <img src={RightChevron} alt="" />
    </div>
  </div>
);

const Slider = () => {
  const swiperRef = useRef();

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  }, []);

  return (
    <div className="bg-hero-bg bg-no-repeat bg-cover bg-center w-full h-[700px]">
      <SliderControls swiperRef={swiperRef} />
      <Swiper ref={swiperRef} slidesPerView={1}   modules={[Autoplay]} >
        <SwiperSlide>
          <div className="mt-28 lg:mt-40 lg:flex justify-between w-4/5 lg:w-5/6 px-4 mx-auto">
            <h1 className="mt-10 mb-8 lg:mb-0 lg:w-1/2 text-center lg:text-left  text-2xl lg:text-3xl font-medium text-light leading-[150%]">
              <span className="text-green font-semibold">
                Turnkey Industrial
              </span>{" "}
              IoT solutions that meets your{" "}
              <span className="text-green font-semibold">sustainable</span>{" "}
              goals and{" "}
              <span className="text-green font-semibold">accelerate</span>{" "}
              your{" "}
              <span className="text-green font-semibold">
                digital transformation
              </span>{" "}
              process
            </h1>
            <div className="flex flex-col justify-center items-center lg:block lg:w-2/5">
              <div className="">
                <img width="" className="" src={Slide1} alt="" />
              </div>
              <p className="text-center lg:text-left mt-4 text-sm  text-light">
                Control and Monitoring System for Air Conditioning Manufacturers
              </p>
              <button className="mt-3 py-2 px-8 border-2 border-ligherGray rounded-xl text-sm font-medium text-ligherGray">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-28 lg:mt-44 lg:flex justify-between w-4/5 lg:w-5/6 px-4 mx-auto">
            <h1 className="mt-10 mb-8 lg:mb-0 lg:w-1/2 text-center lg:text-left  text-2xl lg:text-3xl font-medium text-light leading-[150%]">
              <span className="text-green font-semibold">
                Turnkey Industrial
              </span>{" "}
              IoT solutions that meets your{" "}
              <span className="text-green font-semibold">sustainable</span>{" "}
              goals and{" "}
              <span className="text-green font-semibold">accelerate</span>{" "}
              your{" "}
              <span className="text-green font-semibold">
                digital transformation
              </span>{" "}
              process
            </h1>
            <div className="flex flex-col justify-center items-center lg:block lg:w-2/5">
              <div className="">
                <img width="" className="" src={Slide2} alt="" />
              </div>
              <p className="text-center lg:text-left mt-4 text-sm  text-light">
                Intelligent Power Loggers
              </p>
              <button className="mt-3 py-2 px-8 border-2 border-ligherGray rounded-xl text-sm font-medium text-ligherGray">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-28 lg:mt-44 lg:flex justify-between w-4/5 lg:w-5/6 px-4 mx-auto">
            <h1 className="mt-10 mb-8 lg:mb-0 lg:w-1/2 text-center lg:text-left  text-2xl lg:text-3xl font-medium text-light leading-[150%]">
              <span className="text-green font-semibold">
                Turnkey Industrial
              </span>{" "}
              IoT solutions that meets your{" "}
              <span className="text-green font-semibold">sustainable</span>{" "}
              goals and{" "}
              <span className="text-green font-semibold">accelerate</span>{" "}
              your{" "}
              <span className="text-green font-semibold">
                digital transformation
              </span>{" "}
              process
            </h1>
            <div className="flex flex-col justify-center items-center lg:block lg:w-2/5">
              <div className="">
                <img width="" className="" src={Slide3} alt="" />
              </div>
              <p className="text-center lg:text-left mt-4 text-sm  text-light">
                IoT Development for OEMs
              </p>
              <button className="mt-3 py-2 px-8 border-2 border-ligherGray rounded-xl text-sm font-medium text-ligherGray">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
