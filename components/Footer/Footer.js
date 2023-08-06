import React, { useEffect } from "react";
import { Text } from "../Text";
import { FaFacebook, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";
import FooterLinks from "./FooterLinks";
import { MdLocationPin } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiWorld } from "react-icons/bi";
import HeaderOneLink from "../Headers/HeaderOneLink";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Footer = () => {
  const Tags = [
    "design",
    "fashion",
    "music",
    "video",
    "party",
    "photography",
    "adventure",
    "travel",
  ];
  const contactDetails = [
    {
      title: "Bagmala,Alibag,402107",
      logo: MdLocationPin,
    },
    {
      title: " 7066-022-137",
      logo: FiPhoneCall,
    },
    {
      title: "aaditya56@gmail.com",
      logo: HiOutlineMailOpen,
    },
    {
      title: "https://travel-king.vercel.app",
      logo: BiWorld,
    },
  ];

  const footerNavItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Contact Us",
      link: "/contact",
    },
    {
      title: "Offers",
      link: "/offers",
    },
  ];

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="bg-[#3d0c58] mt-20"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="">
        <div
          className="grid lg:grid-cols-3 gap-10 z-40 p-6 py-16 lg:px-0 lg:w-[70%] m-auto "
        >
          {/* About */}
          <div className="grid gap-8">
            <Text
              transform="uppercase"
              size="24px"
              weight="700"
              color="white"
              mobileSize="18px"
              smallMobileSize="16px"
              className="lg:cursor-pointer"
              onClick={() => window.location.reload()}
            >
              TravelKing
            </Text>
            <Text
              size="16px"
              weight="500"
              color="white"
              mobileSize="14px"
              smallMobileSize="12px"
              className="lg:cursor-pointer tracking-wide"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              provident et maiores est esse ad beatae voluptate nesciunt quae
              reiciendis.
            </Text>
            <div className="flex gap-6 text-white">
              <FooterLinks>
                <FaPinterest />
              </FooterLinks>
              <FooterLinks>
                <FaFacebook />
              </FooterLinks>
              <FooterLinks>
                <FaTwitter />
              </FooterLinks>
              <FooterLinks>
                <FaLinkedin />
              </FooterLinks>
            </div>
          </div>

          {/* Tags */}
          <div className="grid gap-8">
            <Text
              transform="uppercase"
              size="20px"
              weight="700"
              color="white"
              mobileSize="18px"
              smallMobileSize="16px"
            >
              Tags
            </Text>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-2 gap-4 text-white w-fit">
              {Tags.map((item, index) => {
                return (
                  <FooterLinks key={index} box>
                    <Text
                      size="14px"
                      weight="500"
                      color="white"
                      align="center"
                      mobileSize="12px"
                      smallMobileSize="10px"
                      className="lg:cursor-pointer tracking-wide"
                    >
                      {item}
                    </Text>
                  </FooterLinks>
                );
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid gap-4">
            <Text
              transform="uppercase"
              size="20px"
              weight="700"
              color="white"
              mobileSize="18px"
              smallMobileSize="16px"
            >
              Contact Info
            </Text>
            {contactDetails.map((item, index) => {
              const Icon = item.logo;
              return (
                <div key={index} className="flex items-center gap-2">
                  <Icon className="text-orange-400" />
                  <Text
                    size="16px"
                    color="white"
                    align="center"
                    smallMobileSize="14px"
                    className="lg:cursor-pointer"
                  >
                    <HeaderOneLink>{item.title}</HeaderOneLink>
                  </Text>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lower Footer  */}
        <div className="bg-[#2c083f]">
          <div className="flex flex-col-reverse gap-4 p-6 lg:grid lg:grid-cols-[250px,1fr,1fr] lg:py-2 lg:place-items-center lg:w-[70%] m-auto">
            <Text size="12px" weight="600" color="gray" smallMobileSize="10px">
              Copyright ©2023 All rights reserved | This template is made with
              by Aaditya
            </Text>
            <div></div>

            <div className="flex gap-4 lg:gap-10">
              {footerNavItems.map((item, index) => {
                return (
                  <Link href={item.link} key={index} className="shrink-0">
                    <Text
                      transform="uppercase"
                      size="12px"
                      smallMobileSize="10px"
                      weight="700"
                      color="gray"
                    >
                      <HeaderOneLink isFromFooter>{item.title}</HeaderOneLink>
                    </Text>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
