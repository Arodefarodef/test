"use client";

import Button from "@/app/component/button";
import { data } from "@/utils/data";
import Link from "next/link";
import React from "react";
import { MdBeachAccess, MdStadium, MdStars } from "react-icons/md";

const page = () => {
  return (
    <div className="flex justify-center w-full items-center h-screen">
      {/* <div className="text-center">
        <h1 className="text-[70px] ">Choose a plan</h1>
        <h1 className="text-[45px] ">Annually</h1>
        <h1 className="text-[45px] ">Monthly</h1>
      </div> */}
      <div className="flex gap-5">
        {data?.map((props: any, i: number) => (
          <div
            key={props.id}
            className="w-[300px] flex flex-col min-h-[500px] border rounded-md"
          >
            <div className="flex-1 ">
              <div className="flex w-full items-center mt-5 font-semibold uppercase flex-col">
                <div>{props.name} </div>
                <div>
                  {props.name !== "Basic" && "₦"}
                  {props.price}
                </div>
              </div>

              <div className="mt-10 px-5">
                {props.benefits.map((props: string, i: number) => (
                  <p key={i} className="my-5">
                    &middot; {props}
                  </p>
                ))}
              </div>
            </div>
            <Link
              href={props.URL}
              className="flex w-full justify-center mb-6 rounded-[120px]"
            >
              <Button
                icon={
                  props.name === "Basic" ? (
                    <MdStadium />
                  ) : props.name === "Standard" ? (
                    <MdStars />
                  ) : props.name === "Premium" ? (
                    <MdBeachAccess />
                  ) : null
                }
                className={`font-normal ${
                  props.name === "Basic"
                    ? "bg-blue-950"
                    : props.name === "Standard"
                    ? "bg-red-500"
                    : props.name === "Premium"
                    ? "bg-green-500"
                    : null
                } `}
              >
                {props.name}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
