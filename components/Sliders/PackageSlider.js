import React from "react";
import {
  IoCaretBackCircleOutline,
  IoCaretForwardCircleOutline,
} from "react-icons/io5";
import { Carousel } from "react-responsive-carousel";
import { Text } from "../Text";
import Button from "../Button";
import StarRating from "../StarRating";

const PackageSlider = ({ data }) => {
  return (
    <div className="z-40 relative h-full w-full p-5">
      <div className="absolute inset-y-[15%] inset-x-5 md:inset-x-[10%] bg-white p-10">
        <Carousel
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          centerSlidePercentage={true}
          dynamicHeight={true}
          infiniteLoop={true}
          emulateTouch={true}
          // autoPlay={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                className="hidden md:block text-gray-400 absolute inset-y-1/2 letf-5 z-40"
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
                className="hidden md:block text-gray-400 absolute inset-y-1/2 right-5 z-40"
                onClick={onClickHandler}
                type="button"
                title={label}
              >
                <IoCaretForwardCircleOutline className="w-10 h-10 md:w-12 md:h-12" />
              </button>
            )
          }
        >
          {/* <p>Hello</p> */}
          {data.map((item, index) => {
            return (
              <div key={index} className="absolute z-50 py-4 lg:py-10 w-full">
                <div className="flex flex-col gap-4 w-[80%] m-auto">
                  <Text
                    color="black"
                    size="30px"
                    mobileSize="20px"
                    smallMobileSize="18px"
                    weight="700"
                    transform="uppercase"
                    className="tracking-wide"
                  >
                    {item.title}
                  </Text>
                  <StarRating data={item} />
                  <Text
                    color="black"
                    size="16px"
                    mobileSize="14px"
                    smallMobileSize="12px"
                    weight="500"
                    transform="lowercase"
                    className="tracking-wide "
                  >
                    {item.desc}
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
                      <Button>Book Now</Button>
                    </Text>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default PackageSlider;
