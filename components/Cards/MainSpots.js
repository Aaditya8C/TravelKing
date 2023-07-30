import React from "react";
import { Text } from "../Text";
import Button from "../Button";
import {BsStarFill} from "react-icons/bs";
import {BsStarHalf} from "react-icons/bs";
import {BsStar} from "react-icons/bs";
import Rating from "../StarRating";
import StarRating from "../StarRating";

const MainSpots = ({ data }) => {
  return (
    <div
      className="md:aspect-[4/16] lg:aspect-[8/8] w-full  t max-h-[20rem] lg:w-fit p-10 lg:p-16 pt-28 bg-cover bg-center relative flex flex-col"
      style={{ backgroundImage: `url(${data.logo.src})` }}
    >
      <div className="absolute inset-0 bg-purple-900 opacity-40" />
      <div className="z-40 flex flex-col justify-center items-center gap-y-2">
        <Text
          size="36px"
          weight="700"
          color="white"
          align="center"
          mobileSize="25px"
        >
          {data.title}
        </Text>
        <Text size="16px" color="white">
          From  {data.cost}
        </Text>
        <StarRating data={data}/>
        <Button>
          <Text size="12px" weight="700" color="white" mobileSize="10px">
            SEE MORE
          </Text>
        </Button>
      </div>
    </div>
  );
};

export default MainSpots;
