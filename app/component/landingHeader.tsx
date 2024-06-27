"use client";

import logo from "@/public/Logo.png";
import React from "react";
import Button from "./button";
import { MdPerson2, MdAppRegistration } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const LandingPageHead = () => {
  return (
    <div className="flex w-full h-[70px] justify-center items-center">
      <div className="w-[90%] h-full flex justify-between items-center">
        <div className="text-[40px]">
          <Image src={logo} width={100} height={100} alt="image" />
        </div>
        <div className="flex items-center gap-3">
          <Link href="/signin">
            <Button icon={<MdPerson2 />} className="text-neutral-900 bg-white">
              Log in
            </Button>
          </Link>
          <Link href="/register">
            <Button icon={<MdAppRegistration />}>Register</Button>
          </Link>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageHead;
