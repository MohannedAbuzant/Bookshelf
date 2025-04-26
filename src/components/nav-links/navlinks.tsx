import React, { ReactNode } from "react";
import Link from "next/link";
import { INavigation } from "@/types/navigation";

const Navlinks = ({
  textColor,
  activeColor,
  links,
  linkClassName
}: {
  textColor: string;
  activeColor: string;
  links: INavigation[];
  linkClassName?: string;
}): ReactNode => {
  return (
    <>
      {links?.map(({ label, isActive }) => {
        return (
          <Link
            href="#"
            key={label}
            style={{ color: !isActive ? textColor : activeColor }}
            className={linkClassName}
          >
            {label}
          </Link>
        );
      })}
    </>
  );
};

export default Navlinks;
