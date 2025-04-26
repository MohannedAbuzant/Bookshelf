import React, { ReactNode } from "react";
import Image from "next/image";
import logo from "@public/logo.svg";

const Logo = (): ReactNode => {
  return (
    <figure className="m-0">
      <Image src={logo} alt="bookshelf logo" width={200} height={60}></Image>
    </figure>
  );
};

export default Logo;
