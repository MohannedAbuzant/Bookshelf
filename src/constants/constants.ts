import { INavigation } from "@/types/navigation";

export const NAVIGATION_LINKS: INavigation[] = [
  {
    label: "Home",
    isActive: false
  },
  {
    label: "Books",
    doesHaveChildren: true,
    isActive: true
  },
  {
    label: "Reviews",
    isActive: false
  },
  {
    label: "News",
    isActive: false
  },
  {
    label: "Contacts",
    isActive: false
  }
];

const CATEGORIES_LINKS: INavigation[] = [
  { label: "Art", isActive: false },
  { label: "Contemporary", isActive: false },
  { label: "Historical Fiction", isActive: false },
  { label: "Biography", isActive: false },
  { label: "Cookbooks", isActive: false },
  { label: "Historv", isActive: false },
  { label: "Business", isActive: false },
  { label: "Crime", isActive: false },
  { label: "Horror", isActive: false },
  { label: "Chick Lit", isActive: false },
  { label: "Ebooks", isActive: false },
  { label: "Humor And Comedy", isActive: false },
  { label: "Children's", isActive: false },
  { label: "Fantasy", isActive: false },
  { label: "Mang", isActive: false },
  { label: "Christian", isActive: false },
  { label: "Fiction", isActive: false },
  { label: "Memoir", isActive: false },
  { label: "Classics", isActive: false },
  { label: "Gay And Lesbian", isActive: false },
  { label: "Music", isActive: false },
  { label: "Comics", isActive: false },
  { label: "Graphic Novels", isActive: false }
];

const SOCIAL_MEDIA_LINKS: INavigation[] = [
  {
    label: "Facebook",
    isActive: false
  },
  {
    label: "Twitter",
    isActive: false
  },
  {
    label: "RSS",
    isActive: false
  }
];

export const footerSections = [
  {
    title: "NAVIGATION",
    links: NAVIGATION_LINKS,
    linkClassName: "col-12",
    footerSectionClassName: "col-lg-3"
  },
  {
    title: "CATEGORIES",
    links: CATEGORIES_LINKS,
    linkClassName: "col-12 col-lg-4",
    footerSectionClassName: "col-lg-7"
  },
  {
    title: "FOLLOW US",
    links: SOCIAL_MEDIA_LINKS,
    linkClassName: "col-12",
    footerSectionClassName: "col-lg-2"
  }
];

export const UI_COLORS = {
  FOOTER_COLOR: "#b2b2b2",
  LIGHT_GRAY: "#f6f6f6",
  LIGHT_BLACK: "#151515",
  GREEN: "#82b808"
};

export const BREAK_POINTS = {
  MD: 768,
  LG: 1024,
  XL: 1400
};
