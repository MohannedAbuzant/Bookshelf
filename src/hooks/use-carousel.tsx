import { ReactNode, RefObject, useEffect, useState } from "react";
import { getSlideWidth } from "@/utils/carousel";

const useCarousel = ({
  ref,
  children
}: {
  ref: RefObject<HTMLElement | null>;
  children: ReactNode;
}) => {
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
  return {
    previousSlideTriggered,
    nextSlideTriggered,
    activeSlide
  };
};

export default useCarousel;
