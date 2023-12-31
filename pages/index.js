import { Inter } from "next/font/google";
import ParentLayout from "@/components/Layouts/ParentLayout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Text } from "@/components/Text";
import MainSpots from "@/components/Cards/MainSpots";
import { SpotOne, SpotTwo, SpotThree } from "@/constants/imageConstant";
import MiddleBar from "@/components/MiddleBar";
import { Jetty } from "@/constants/imageConstant";
import PackageSlider from "@/components/Sliders/PackageSlider";
import {
  StayOne,
  StayTwo,
  StayThree,
  StayFour,
} from "@/constants/imageConstant";
import Stay from "@/components/Cards/Stay";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Trending from "@/components/Cards/Trending";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const mainSpots = [
    {
      title: "Alibag Beach",
      cost: "₹2000",
      ratings: 3,
      logo: SpotOne,
      aosProp: "fade-right",
    },
    {
      title: "Birla Temple",
      cost: "₹2500",
      ratings: 4,
      logo: SpotTwo,
      aosProp: "zoom-in",
    },
    {
      title: "Nagaon Beach",
      cost: "₹3000",
      ratings: 3.5,
      logo: SpotThree,
      aosProp: "fade-left",
    },
  ];

  const Packages = [
    {
      title: "Alibag Deluxe Package",
      cost: "₹2000",
      ratings: 3,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, illum explicabo ex possimus perspiciatis dolorem eos amet officia odit itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, eum!",
    },
    {
      title: "Nagaon Premium Package",
      cost: "₹2500",
      ratings: 4,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, illum explicabo ex possimus perspiciatis dolorem eos amet officia odit itaque.",
    },
    {
      title: "Revdanda Gold Package",
      cost: "₹3000",
      ratings: 3.5,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, illum explicabo ex possimus perspiciatis dolorem eos amet officia odit itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, eum! dndbiwhd",
    },
    {
      title: "Kashid Gold Package",
      cost: "₹3000",
      ratings: 4.5,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, illum explicabo ex possimus perspiciatis dolorem eos amet officia odit itaque.",
    },
  ];

  const StayDetails = [
    {
      title: "Chawl Farmyard",
      cost: "₹1500",
      ratings: 3,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus natus mollitia eos, eum facere laborum corrupti aperiam sit. Ut, neque!",
      logo: StayOne,
    },
    {
      title: "Aakshi Bootcamp",
      cost: "₹1800",
      ratings: 3,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus natus mollitia eos, eum facere laborum corrupti aperiam sit. Ut, neque!",
      logo: StayTwo,
    },
    {
      title: "Grand Nagaon",
      cost: "₹2000",
      ratings: 3,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus natus mollitia eos, eum facere laborum corrupti aperiam sit. Ut, neque!",
      logo: StayThree,
    },
    {
      title: "Revdanda Camp",
      cost: "₹1200",
      ratings: 3,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus natus mollitia eos, eum facere laborum corrupti aperiam sit. Ut, neque!",
      logo: StayFour,
    },
  ];

  const TrendingHotels = [
    {
      title: "Nilaya Nest Away",
      cost: "₹3000",
      location: "Nagaon, Alibag",
      logo: StayOne
    },
    {
      title: "White House",
      cost: "₹2300",
      location: "Nagaon, Alibag",
      logo: StayOne
    },
    {
      title: "Durvankur Cottage",
      cost: "₹1600",
      location: "Nagaon, Alibag",
      logo: StayOne
    },
    {
      title: "Silvanus Forest",
      cost: "₹1500",
      location: "Revdanda, Alibag",
      logo: StayOne
    },
    {
      title: "Elysium Resort",
      cost: "₹2500",
      location: "Yesade, Revdanda",
      logo: StayOne
    },
    {
      title: "Samara SeaView ",
      cost: "₹2000",
      location: "Akshi, Revdanda",
      logo: StayOne
    },
    {
      title: "Happyland Villa ",
      cost: "₹12500",
      location: "Alibag",
      logo: StayOne
    },
    {
      title: "Coastal Bay Inn",
      cost: "₹3500",
      location: "Alibag",
      logo: StayOne
    },
  ];

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <ParentLayout>
        <MiddleBar />
        {/* Main Spots */}
        <div className="w-full lg:w-3/4 m-auto py-24">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="px-4 flex flex-col gap-6">
              <Text
                size="36px"
                weight="700"
                color="black"
                mobileSize="25px"
                align="center"
                smallMobileSize="20px"
              >
                We have the best tours
              </Text>
              <Text size="24px" color="black" align="center" className="italic" smallMobileSize="18px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis neque tenetur quas itaque officia laborum provident
                quia odit cum corporis.
              </Text>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 w-[90%] py-8 overflow-hidden">
              {mainSpots.map((spot, index) => {
                return <MainSpots data={spot} key={index} />;
              })}
            </div>
          </div>
        </div>

        {/* Packages */}
        <div
          className="aspect-[4/8] md:aspect-[8/6] lg:aspect-[4/1.5] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${Jetty.src})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#fa9e1b] to-[#8d4fff] opacity-40" />
          <PackageSlider data={Packages} />
        </div>

        {/* Room Offers */}

        <div className="w-[90%] lg:w-[80%] m-auto py-20">
          <Text
            color="black"
            size="30px"
            mobileSize="20px"
            smallMobileSize="18px"
            weight="700"
            transform="uppercase"
            className="tracking-wide"
            align="center"
          >
            The best offers with rooms
          </Text>
          <div className="grid lg:grid-cols-2 gap-16 py-16">
            {StayDetails.map((item, index) => {
              return <Stay data={item} key={index} />;
            })}
          </div>
        </div>

        <div className="h-1 bg-travelking" />
        <div className="w-[90%] lg:w-[80%] m-auto py-20">
          <Text
            size="30px"
            mobileSize="20px"
            smallMobileSize="18px"
            weight="700"
            transform="uppercase"
            className="tracking-wide"
            align="center"
          >
            Trending Now
          </Text>
          <div className="py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14 place-content-center overflow-y-hidden">
            {TrendingHotels.map((item, index) => {
              return <Trending data={item} key={index} />;
            })}
          </div>
        </div>
        <div className="h-1 bg-travelking" />
        <Footer/>
      </ParentLayout>
    </>
  );
}
