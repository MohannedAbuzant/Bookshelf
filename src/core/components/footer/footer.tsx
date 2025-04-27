import React, { ReactNode } from "react";
import classes from "./footer.module.scss";
import FooterSection from "@/core/components/footer/footer-section/footer-section";

const Footer = (): ReactNode => {
  return (
    <footer className={` ${classes.footerContainer}`}>
      <section className="d-flex flex-column flex-lg-row gap-3 py-2 py-lg-0 pb-2 container">
        <FooterSection></FooterSection>
      </section>
    </footer>
  );
};

export default Footer;
