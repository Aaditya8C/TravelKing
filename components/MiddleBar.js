import React, { useState } from "react";
import {
  Hotel,
  Activity,
  Bus,
  Trip,
  Cruise,
  Flight,
} from "@/constants/imageConstant";
import Image from "next/image";
import { Text } from "./Text";
import classNames from "classnames";
import { LuHotel } from "react-icons/lu";
import { BiBus } from "react-icons/bi";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { GiIsland } from "react-icons/gi";
import { GiCruiser } from "react-icons/gi";
import { TbScubaMask } from "react-icons/tb";
import ParentLayout from "./Layouts/ParentLayout";

const MiddleBar = () => {
  const [selected, setSelected] = useState("Hotels");
  const middleBarContent = [
    {
      label: "Hotels",
      icon: LuHotel,
    },
    {
      label: "Car Rentals",
      icon: BiBus,
    },
    {
      label: "Flights",
      icon: RiFlightTakeoffFill,
    },
    {
      label: "Trips",
      icon: GiIsland,
    },
    {
      label: "Cruises",
      icon: GiCruiser,
    },
    {
      label: "Activities",
      icon: TbScubaMask,
    },
  ];
  const onSelected = (item) => {
    setSelected(item);
  };
  return (
    <div className="lg:absolute bottom-0 z-50 w-full py-20 lg:py-0 bg-gradient-to-r from-[#fa9e1b] to-[#8d4fff] lg:bg-none">
      <div className="sticky bottom-0 lg:rounded-t-full mx-5 lg:mx-52 bg-white">
        <div className="flex flex-col lg:flex-row justify-between rounded-tr-full rounded-tl-full">
          {middleBarContent.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={classNames(
                  "flex gap-2 w-full h-full hover:lg:cursor-pointer py-6 lg:py-8 px-6 lg:justify-center transition-all duration-200 hover:bg-[#fa9e1b] hover:text-white",
                  item.label.includes(selected) && "bg-[#fa9e1b] text-white",
                  index === 0
                    ? "lg:rounded-tl-full"
                    : index === middleBarContent.length - 1
                    ? "lg:rounded-tr-full"
                    : ""
                )}
                onClick={() => setSelected(item.label)}
              >
                <Icon className="w-7 h-7" />
                {/* <Image src={item.icon} width={20} height={20} alt="middleBar" /> */}
                <Text
                  transform="uppercase"
                  size="14px"
                  weight="600"
                  mobileSize="16px"
                  smallMobileSize="14px"
                >
                  {item.label}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MiddleBar;
