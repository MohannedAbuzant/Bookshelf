import { BREAK_POINTS } from "@/constants/constants";

export const getSlideWidth = () => {
  const currentBreakPoint = document.documentElement.clientWidth;
  let slideWidth = 160;
  let minNumberOfSlides = 1;
  if (currentBreakPoint > BREAK_POINTS.MD) {
    slideWidth = 150;
    minNumberOfSlides = 3;
  }
  if (currentBreakPoint > BREAK_POINTS.LG) {
    slideWidth = 160;
    minNumberOfSlides = 5;
  }
  if (currentBreakPoint > BREAK_POINTS.XL) {
    slideWidth = 200;
  }
  return { slideWidth, minNumberOfSlides };
};
