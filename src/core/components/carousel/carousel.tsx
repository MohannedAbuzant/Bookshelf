"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import classes from "./carousel.module.scss";
import Image from "next/image";
import { getSlideWidth } from "@/utils/carousel";

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

  useEffect(() => {
    const handleResize = () => {
      // do magic for resize
      ref.current!.style.transform = `translate3d(0, 0, 0)`;
      setActiveSlide(0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const nextSlideTriggered = () => {
    if (!ref.current) return;

    setActiveSlide((prevState) => {
      const newActiveSlide = prevState + 1;
      const { slideWidth, minNumberOfSlides } = getSlideWidth();

      const totalSlides = Array.isArray(children) ? children.length : 1;
      const slidesLeft = totalSlides - (minNumberOfSlides + activeSlide);
      if (!slidesLeft) {
        return prevState;
      }
      ref.current!.style.transform = `translate3d(${newActiveSlide * -slideWidth}px, 0, 0)`;
      return newActiveSlide;
    });
  };

  const previousSlideTriggered = () => {
    if (!ref.current) return;

    setActiveSlide((prevState) => {
      const newActiveSlide = prevState - 1;
      const { slideWidth } = getSlideWidth();
      if (!prevState) {
        return prevState;
      }
      ref.current!.style.transform = `translate3d(${newActiveSlide * -slideWidth}px, 0, 0)`;
      return newActiveSlide;
    });
  };
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
