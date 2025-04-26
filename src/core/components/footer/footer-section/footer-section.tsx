import React, { ReactNode } from "react";
import Navlinks from "@/components/nav-links/navlinks";
import { footerSections, UI_COLORS } from "@/constants/constants";

const FooterSection = (): ReactNode => {
  const sections = footerSections;
  return (
    <>
      {sections.map(({ title: sectionTitle, links }) => {
        return (
          <section
            className="d-flex gap-2 flex-column  text-align-center"
            key={sectionTitle}
          >
            <h4 className="text-white">{sectionTitle}</h4>
            <nav className="d-flex flex-column gap-1">
              <Navlinks
                textColor={UI_COLORS.FOOTER_COLOR}
                links={links}
              ></Navlinks>
            </nav>
          </section>
        );
      })}
    </>
  );
};

export default FooterSection;
