import React from "react";
import Image from "next/image";
import logo from "@/public/Logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex w-full h-[90px] justify-center items-center">
      <div className="w-[90%] h-full flex justify-between items-center">
        <div className="text-[40px]">
          <Image src={logo} width={100} height={100} alt="image" />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-between text-[25px] gap-3">
            <FaInstagram />
            <FaTwitter />
            <FaFacebook />
            <FaPinterest />
          </div>
        </div>
        <div className="mt-[80px] flex text-gray-500 text-center text-[12px] gap-1">
          <FaRegCopyright />
          <p className="text-[15px] "> 2024 Fedora</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
