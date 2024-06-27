import React from "react";
import { Poppins } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import ScrollScreen from "./scroolScreen";
import LandingPageHead from "./landingHeader";
import Button from "./button";
import Footer from "./footer";

const poppins: NextFont = Poppins({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});

const LandingPage = () => {
  return (
    <div className="bg-[#F8F7F4]">
      <LandingPageHead />
      <div className="text-center py-40 w-full h-full flex flex-col items-center justify-center">
        <div className="flex items-center judtify-center bg-yellow-300 border rounded-[120px] px-6 py-5 h-[30px] font-serif text-semibold text-[15px] mt-6">
          Over 3 million ready-to-work creatives!
        </div>
        <div className="text-center font-serif">
          <h1 className="text-[80px]">The world’s destination</h1>
          <h1 className="text-[80px]">for design</h1>
        </div>
        <h3 className="text-semibold text-[25px] font-serif">
          Get inspired by the work of millions of top-rated designers & agencies
          around the world.
        </h3>
        <Button className="text-[20-px] text-white mt-6">Get Started</Button>
      </div>
      <ScrollScreen />

      <Footer />
    </div>
  );
};

export default LandingPage;
