import Image from "next/image";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeaderTwo from "@/components/Headers/HeaderTwo";
import HeaderOne from "@/components/Headers/HeaderOne";
import Slider from "@/components/Sliders/Slider";
import { useGesture, useScroll } from "react-use-gesture";

const ParentLayout = ({ children }) => {
  // const [scrollingDown, setScrollingDown] = useState("down");

  // const bind = useGesture({
  //   onWheel:({direction}) => {
  //     setScrollingDown(direction[1] === 1 ? "down" : direction[1] === -1 ? "up" : "normal" );
  //   }
  // })

  return (
    <>
      <div className="h-screen">
        <Slider />
        <main className="absolute !top-0 w-full">
          <HeaderOne />
          <HeaderTwo />
        </main>
        {children}
      </div>
    </>
  );
};

export default ParentLayout;
