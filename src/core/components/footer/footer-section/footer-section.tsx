import React, { ReactNode } from "react";
import Navlinks from "@/components/nav-links/navlinks";
import { footerSections, UI_COLORS } from "@/constants/constants";
import classes from "./footer-section.module.scss";

const FooterSection = (): ReactNode => {
  return (
    <>
      {footerSections.map(
        ({
          title: sectionTitle,
          links,
          linkClassName,
          footerSectionClassName
        }) => {
          return (
            <section
              className={`d-flex gap-2 flex-column  text-align-center flex-wrap text-align-lg-start ${classes.footerSectionContainer} ${footerSectionClassName}`}
              key={sectionTitle}
            >
              <h4 className="text-white pt-lg-2">{sectionTitle}</h4>
              <nav className="d-flex flex-column flex-lg-row flex-wrap">
                <Navlinks
                  textColor={UI_COLORS.FOOTER_COLOR}
                  activeColor={UI_COLORS.GREEN}
                  links={links}
                  linkClassName={linkClassName}
                ></Navlinks>
              </nav>
            </section>
          );
        }
      )}
    </>
  );
};

export default FooterSection;
