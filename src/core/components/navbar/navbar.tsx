"use client";

import React, { ReactNode, useState } from "react";
import classes from "./navbar.module.scss";
import Logo from "@/core/components/logo/logo";
import Navlinks from "@/components/nav-links/navlinks";
import { NAVIGATION_LINKS } from "@/constants/constants";
import Image from "next/image";
import Aside from "@/core/components/aside/aside";

const Navbar = ({ children }: { children: ReactNode }): ReactNode => {
  const [isAsideOpened, setIsAsideOpened] = useState(false);
  return (
    <>
      <header className={`${classes.nav}`}>
        <div className="d-flex p-2  align-items-center h-100 gap-2 justify-content-center">
          <a onClick={() => setIsAsideOpened(true)}>
            <Image
              src="/burger-menu.svg"
              width={30}
              height={40}
              alt="burger menu"
            ></Image>
          </a>
          <Logo />
          <Image
            src="./search.svg"
            width={30}
            height={40}
            alt="search logo"
          ></Image>

          <nav className="d-none gap-2">
            <Navlinks textColor="black" links={NAVIGATION_LINKS}></Navlinks>
          </nav>

          <Aside
            isOpened={isAsideOpened}
            closeAsideDrawer={() => setIsAsideOpened(false)}
          ></Aside>
        </div>
      </header>
      {!isAsideOpened && children}
    </>
  );
};

export default Navbar;
