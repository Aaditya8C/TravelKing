import React from "react";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import HeaderOneLink from "./HeaderOneLink";

const HeaderOne = () => {
  return (
    <div className="bg-[#350a4e] lg:grid grid-cols-[200px,250px,1fr,400px] text-white py-3 sticky hidden">
      <div></div>
      <div className="text-sm">
        <p>+91 7066022137</p>
      </div>
      <div className="flex gap-6">
        <HeaderOneLink>
          <FaPinterest />
        </HeaderOneLink>
        <HeaderOneLink>
          <FaFacebook />
        </HeaderOneLink>
        <HeaderOneLink>
          <FaTwitter />
        </HeaderOneLink>
        <HeaderOneLink>
          <FaLinkedin />
        </HeaderOneLink>
      </div>
      <div className="flex gap-2 text-sm">
        <HeaderOneLink>
          <p className="uppercase">Login</p>
        </HeaderOneLink>
        <p>|</p>
        <HeaderOneLink>
          <p className="uppercase">Register</p>
        </HeaderOneLink>
      </div>
    </div>
  );
};

export default HeaderOne;
