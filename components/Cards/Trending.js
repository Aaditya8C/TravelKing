import Image from "next/image";
import React from "react";
import { Text } from "../Text";
import Aos from "aos";
import "aos/dist/aos.css";

const Trending = ({ data }) => {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="grid grid-cols-2 place-items-center"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Image src={data.logo} alt="lodge" width={100} height={100} />
      <div className="flex flex-col gap-1">
        <Text
          size="16px"
          weight="700"
          align="left"
          mobileSize="18px"
          smallMobileSize="14px"
        >
          {data.title}
        </Text>
        <Text size="14px" color="orange" weight="700" smallMobileSize="12px">
          From {data.cost}
        </Text>
        <Text size="12px" color="gray" transform="uppercase">
          {data.location}
        </Text>
      </div>
    </div>
  );
};

export default Trending;
