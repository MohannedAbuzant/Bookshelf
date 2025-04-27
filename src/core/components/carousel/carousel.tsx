"use client";

import { ReactNode, useRef } from "react";
import classes from "./carousel.module.scss";
import Image from "next/image";
import useCarousel from "@/hooks/use-carousel";

const Carousel = ({
  title,
  children,
  carouselTitleColor
}: {
  title: string;
  children: ReactNode;
  carouselTitleColor: string;
}): ReactNode => {
  const ref = useRef<HTMLElement | null>(null);
  const { activeSlide, previousSlideTriggered, nextSlideTriggered } =
    useCarousel({ ref, children });
  return (
    <section className="d-flex align-items-center gap-3">
      <button
        aria-label="previous slide"
        onClick={() => previousSlideTriggered()}
        className="cursor-pointer"
      >
        <Image
          src="/left-chevron.svg"
          alt={"left chevron"}
          width={20}
          height={20}
        ></Image>
      </button>
      <section
        style={{ color: carouselTitleColor }}
        className={`${classes.carouselContainer}`}
      >
        <section>
          <h3 className="mb-3">{title}</h3>
          <section
            className={`d-flex gap-2 ${classes.carouselBody}`}
            ref={ref}
            data-size="200"
            data-current={activeSlide}
          >
            {children}
          </section>
        </section>
      </section>

      <button
        aria-label="next slide"
        onClick={() => nextSlideTriggered()}
        className="cursor-pointer"
      >
        <Image
          src="/right-chevron.svg"
          alt={"right chevron"}
          width={20}
          height={20}
        ></Image>
      </button>
    </section>
  );
};

export default Carousel;
