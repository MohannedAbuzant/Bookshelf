"use client";

import { ReactNode, useRef, useState } from "react";
import classes from "./carousel.module.scss";
import Image from "next/image";
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
  const [activeSlide, setActiveSlide] = useState(0);
  const nextSlideTriggered = () => {
    if (!ref.current) return;

    setActiveSlide((prevState) => {
      const newActiveSlide = prevState + 1;
      ref.current!.style.transform = `translate3d(${newActiveSlide * -215}px, 0, 0)`;
      return newActiveSlide;
    });
  };

  const previousSlideTriggered = () => {
    if (!ref.current) return;

    setActiveSlide((prevState) => {
      const newActiveSlide = prevState - 1;
      ref.current!.style.transform = `translate3d(${newActiveSlide * -215}px, 0, 0)`;
      return newActiveSlide;
    });
  };
  return (
    <section className="d-flex align-items-center gap-3">
      <button
        aria-label="previous slide"
        onClick={() => previousSlideTriggered()}
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
            className={`d-flex gap-2 `}
            ref={ref}
            data-size="200"
            data-current={activeSlide}
          >
            {children}
          </section>
        </section>
      </section>

      <button aria-label="next slide" onClick={() => nextSlideTriggered()}>
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
