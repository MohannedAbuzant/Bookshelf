import React, { ReactNode } from "react";
import Image from "next/image";
import logo from "@public/logo.svg";
import Link from "next/link";

const Logo = (): ReactNode => {
  return (
    <nav>
      <Link href="/">
        <figure className="m-0">
          <Image
            src={logo}
            alt="bookshelf logo"
            width={200}
            height={60}
          ></Image>
        </figure>
      </Link>
    </nav>
  );
};

export default Logo;
