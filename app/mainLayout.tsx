"use client";

import { usePathname } from "next/navigation";
import React, { FC, ReactNode } from "react";
import Header from "./static/header";

interface iPops {
  children: ReactNode;
}

const MainLayout: FC<iPops> = async ({ children }) => {
  const pathName = usePathname();

  if (pathName === "/register" || pathName === "/signin") {
    return <div>{children}</div>;
  } else {
    return (
      <div>
        <Header />
        <div>{children}</div>
      </div>
    );
  }
};

export default MainLayout;
