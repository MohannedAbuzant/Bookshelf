import React, { ReactNode } from "react";
import Link from "next/link";
import { INavigation } from "@/types/navigation";
import Image from "next/image";
const Navlinks = ({
  textColor,
  activeColor,
  links,
  linkClassName,
  canShowChildrenExpandIcon = false
}: {
  textColor: string;
  activeColor: string;
  links: INavigation[];
  linkClassName?: string;
  canShowChildrenExpandIcon?: boolean;
}): ReactNode => {
  return (
    <>
      {links?.map(({ label, isActive, doesHaveChildren }) => {
        return (
          <Link
            href="#"
            key={label}
            style={{ color: !isActive ? textColor : activeColor }}
            className={`${canShowChildrenExpandIcon && doesHaveChildren && "d-flex align-items-center"} ${linkClassName}`}
          >
            {label}
            {canShowChildrenExpandIcon && doesHaveChildren && (
              <Image
                src={"/caret-down.svg"}
                width={20}
                height={20}
                alt={"caret down"}
              ></Image>
            )}
          </Link>
        );
      })}
    </>
  );
};

export default Navlinks;
