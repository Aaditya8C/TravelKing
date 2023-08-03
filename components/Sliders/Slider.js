import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { IoCaretForwardCircleOutline } from "react-icons/io5";
import { Text } from "../Text";
import { motion } from "framer-motion";
import Button from "../Button";

const Slider = () => {
  const sliderContent = [
    {
      title: "Discover",
      description: "Alibag",
      className: "landingOne",
    },
    {
      title: "Explore The",
      description: "New GOA",
      className: "landingTwo",
    },
  ];
  return (
    <>
      <div className="relative h-screen">
        <Carousel
          showIndicators={true}
          showStatus={false}
          showThumbs={false}
          centerSlidePercentage={true}
          dynamicHeight={true}
          autoPlay={true}
          infiniteLoop={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                className="hidden md:block text-gray-100 absolute inset-y-1/2 left-5 z-40"
                onClick={onClickHandler}
                type="button"
                title={label}
              >
                <IoCaretBackCircleOutline className="w-10 h-10 md:w-12 md:h-12" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                className="hidden md:block text-gray-100 absolute inset-y-1/2 right-5 z-40"
                onClick={onClickHandler}
                type="button"
                title={label}
              >
                <IoCaretForwardCircleOutline className="w-10 h-10 md:w-12 md:h-12" />
              </button>
            )
          }
        >
          {sliderContent.map((item, index) => {
            return (
              <div className={`${item.className} relative`} key={index}>
                <motion.div
                  className="absolute inset-0 flex flex-col justify-center  z-40 w-full "
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, type: "spring" }}
                >
                  <Text
                    color="white"
                    size="96px"
                    mobileSize="30px"
                    smallMobileSize="20px"
                    weight="800"
                    transform="uppercase"
                    className="tracking-wide font-Pacifico"
                  >
                    {item.title}
                  </Text>
                  <Text
                    color="white"
                    size="80px"
                    weight="600"
                    mobileSize="30px"
                    smallMobileSize="20px"
                    className="md:-mt-10 font-Pacifico"
                  >
                    {item.description}
                  </Text>
                  <div className="mt-6">
                    <Text
                      color="white"
                      size="16px"
                      weight="600"
                      mobileSize="14px"
                      smallMobileSize="12px"
                      className="md:-mt-10 font-Pacifico"
                    >
                      <Button>Explore Now</Button>
                    </Text>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </Carousel>
        {/* <MiddleBar/> */}
      </div>
    </>
  );
};

export default Slider;
