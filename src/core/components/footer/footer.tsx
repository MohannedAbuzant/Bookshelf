import React, { ReactNode } from "react";
import classes from "./footer.module.scss";
import FooterSection from "@/core/components/footer/footer-section/footer-section";

const Footer = (): ReactNode => {
  return (
    <footer
      className={`d-flex flex-column gap-3 py-2 ${classes.footerContainer}`}
    >
      <FooterSection></FooterSection>
    </footer>
  );
};

export default Footer;
