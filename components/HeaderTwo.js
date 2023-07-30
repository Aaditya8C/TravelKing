import React, { useEffect, useState } from "react";
import { Text } from "./Text";
import { FiMenu } from "react-icons/fi";
import classNames from "classnames";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const HeaderTwo = () => {
  const navbarValues = [
    {
      label: "Home",
    },
    {
      label: "Offers",
    },
    {
      label: "News",
    },
    {
      label: "Contact",
    },
  ];
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className="bg-dark-blue lg:bg-[#350a4e] lg:bg-opacity-70 z-50 lg:grid grid-cols-[300px,400px,1fr,200px] py-4 lg:py-10 items-center fixed lg:relative top-0  inset-x-0">
      <div></div>
      <div className="flex justify-between px-4 lg:px-0">
        <Text transform="uppercase" size="24px" weight="700" color="white" className="lg:cursor-pointer" onClick={() => window.location.reload()}>
          TravelKing
        </Text>
        <FiMenu
          className="text-white lg:hidden w-7 h-7 hover:text-orange-400"
          onClick={() => setShowMobileNav(true)}
        />
      </div>
      <div className="lg:flex gap-8 hidden">
        {navbarValues.map((item, index) => {
          return (
            <Text
              transform="uppercase"
              size="16px"
              weight="600"
              key={index}
              color="white"
              className="relative group lg:hover:cursor-pointer"
            >
              {item.label}
              <span className="group-hover:opacity-100 bottom-0 left-0 top-6 absolute w-full h-1 bg-gradient-to-r from-[#fa9e1b] to-[#8d4fff] opacity-0 transition-all duration-500"></span>
            </Text>
          );
        })}
      </div>
      {showMobileNav && (
        <MobileNav
          navbarValues={navbarValues}
          setShowMobileNav={setShowMobileNav}
        />
      )}
      <div></div>
    </div>
  );
};

export default HeaderTwo;

export const MobileNav = ({ navbarValues, setShowMobileNav }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, type: "spring" }}
      className={classNames(
        "absolute z-50 top-0 bottom-0 right-0 left-0 h-screen flex items-center justify-center bg-gradient-to-r from-[#fa9e1b] to-[#8d4fff]"
        // ,showMobileNav ? "block" : "hidden"
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <AiOutlineClose
          className="text-white w-7 h-7 absolute top-5 right-5"
          onClick={() => setShowMobileNav(false)}
        />
        {navbarValues.map((item, index) => {
          return (
            <Text
              transform="uppercase"
              size="16px"
              weight="600"
              key={index}
              color="white"
              className="relative"
            >
              {item.label}
              {/* <span className="group-hover:opacity-100 bottom-0 left-0 top-6 absolute w-full h-1 bg-gradient-to-r from-[#fa9e1b] to-[#8d4fff] opacity-0 transition-all duration-500"></span> */}
            </Text>
          );
        })}
      </div>
    </motion.div>
  );
};

// linear-gradient(to right, #fa9e1b, #8d4fff
