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
        <div className="align-items-center container d-flex gap-2 h-100 justify-content-center justify-content-lg-space-between justify-content-lg-start">
          <a onClick={() => setIsAsideOpened(true)} className="d-lg-none">
            <Image
              src="/burger-menu.svg"
              width={30}
              height={40}
              alt="burger menu"
            ></Image>
          </a>
          <Logo />
          <Image
            src="/search.svg"
            width={30}
            height={40}
            alt="search logo"
            className="d-lg-none"
          ></Image>

          <nav className="d-none d-lg-flex align-items-center gap-2">
            <Navlinks
              textColor="white"
              links={NAVIGATION_LINKS}
              activeColor="black"
              canShowChildrenExpandIcon={true}
            ></Navlinks>
            <Image
              src="/search.svg"
              width={30}
              height={30}
              alt="search logo"
            ></Image>
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
