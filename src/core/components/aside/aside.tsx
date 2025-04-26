import React, { ReactNode } from "react";
import classes from "./aside.module.scss";
import Navlinks from "@/components/nav-links/navlinks";
import { NAVIGATION_LINKS } from "@/constants/constants";

const Aside = ({
  isOpened,
  closeAsideDrawer
}: {
  isOpened: boolean;
  closeAsideDrawer: () => void;
}): ReactNode => {
  return (
    <aside className={classes.sideContainer} data-opened={isOpened}>
      <div className="d-flex justify-content-end ">
        <button
          className="btn-transparent"
          aria-label="aside close button"
          onClick={closeAsideDrawer}
        >
          x
        </button>
      </div>
      <nav className={`d-flex flex-column gap-2 ${classes.nav}`}>
        <Navlinks textColor="black" links={NAVIGATION_LINKS}></Navlinks>
      </nav>
    </aside>
  );
};

export default Aside;
