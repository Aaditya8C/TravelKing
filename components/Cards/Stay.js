import React, { useEffect } from "react";
import { Text } from "../Text";
import StarRating from "../StarRating";
import { LiaBicycleSolid } from "react-icons/lia";
import { BiDirections } from "react-icons/bi";
import { TbSpeedboat, TbCompass } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";

const Stay = ({ data }) => {
  const commonItems = [LiaBicycleSolid, BiDirections, TbSpeedboat, TbCompass];
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div
      className="w-full lg:h-[300px] grid lg:grid-cols-2 gap-6"
      // data-aos={data.aosProp}
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div
        className="bg-cover bg-center aspect-[4/4] md:aspect-[4/2] lg:aspect-[4/4] relative"
        style={{ backgroundImage: `url(${data.logo.src})` }}
      >
        <div className="bg-orange-400 z-40 absolute bottom-8 p-2 lg:p-[6px]">
          <Text
            color="white"
            size="14px"
            mobileSize="14px"
            smallMobileSize="12px"
            weight="700"
            transform="uppercase"
            className="tracking-wide"
            align="center"
          >
            {data.title}
          </Text>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <Text
            color="orange"
            size="24px"
            mobileSize="24px"
            smallMobileSize="20px"
            weight="700"
            className="tracking-wide"
          >
            {data.cost}
          </Text>
          <Text size="14px" mobileSize="14px" className="tracking-wide">
            per night
          </Text>
        </div>
        <StarRating data={data} />

        <div className="flex flex-col gap-4">
          <Text size="14px" mobileSize="14px" className="tracking-wide">
            {data.desc}
          </Text>
          <div className="flex gap-2">
            {commonItems.map((item, index) => {
              const Icon = item;
              return <Icon key={index} className="w-8 h-8 text-gray-400" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stay;
