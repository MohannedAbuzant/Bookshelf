import React, { ReactNode } from "react";
import Link from "next/link";
import { INavigation } from "@/types/navigation";
import classes from "./navlinks.module.scss";
const Navlinks = ({
  textColor,
  links
}: {
  textColor: string;
  links: INavigation[];
}): ReactNode => {
  return (
    <>
      {links?.map(({ label, isActive }) => {
        return (
          <Link
            href="#"
            key={label}
            className={isActive ? `${classes.activeLink}` : ""}
            style={{ color: !isActive ? textColor : "" }}
          >
            {label}
          </Link>
        );
      })}
    </>
  );
};

export default Navlinks;
